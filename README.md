🚀 Node.js + MySQL + Docker Configuration
Este proyecto demuestra cómo configurar correctamente una aplicación Node.js con Express, MySQL y Docker, aplicando las mejores prácticas de programación y arquitectura de software.

✅ Arquitectura Modular: Separación clara de responsabilidades
✅ Pool de Conexiones MySQL: Configuración optimizada para producción
✅ Patrón Singleton: Una sola instancia de base de datos
✅ Manejo de Errores Robusto: Try-catch en todas las operaciones
✅ Consultas Preparadas: Protección contra SQL injection
✅ Docker Ready: Configuración completa con Docker Compose
✅ Variables de Entorno: Configuración segura y flexible
✅ Logging Estructurado: Mensajes informativos y organizados

🛠 Tecnologías

Node.js - Runtime de JavaScript
Express.js - Framework web minimalista
MySQL - Base de datos relacional
Docker - Containerización
mysql2 - Driver MySQL para Node.js
dotenv - Gestión de variables de entorno

Archivo .env debe contener estas variables de entorno:
PORT_SERVER=xxxxxx
MYSQL_LOCAL_HOST=localhost
MYSQL_DOCKER_HOST=xxxxx
MYSQL_DOCKER_PORT=xxxxx
MYSQL_LOCAL_PORT=xxxxxx
MYSQL_USER=root
MYSQL_PASSWORD=xxxxx
MYSQL_DATABASE=xxxxx
