#!/usr/bin/env bash
# build.sh - Se ejecuta en cada deploy de Render
# Detiene la ejecución si algún comando falla
set -o errexit

echo "📦 Instalando dependencias..."
pip install -r requirements.txt

echo "🎨 Recolectando archivos estáticos..."
python manage.py collectstatic --no-input

echo "🗄️  Aplicando migraciones..."
python manage.py migrate

echo "🏫 Precargando datos de ESCOM..."
# Estos comandos son idempotentes: si ya existen los datos, no fallan
python manage.py cargar_escom --con-qr || true
python manage.py cargar_grafo_escom --reset || true

echo "👤 Creando superusuario si no existe..."
python manage.py shell << EOF
from django.contrib.auth import get_user_model
import os
User = get_user_model()
username = os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')
email = os.environ.get('DJANGO_SUPERUSER_EMAIL', 'admin@campusgo.com')
password = os.environ.get('DJANGO_SUPERUSER_PASSWORD', 'CampusGo2026!')
if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print(f"✅ Superusuario '{username}' creado")
else:
    print(f"ℹ️  Superusuario '{username}' ya existe")
EOF

echo "✅ Build completado correctamente"