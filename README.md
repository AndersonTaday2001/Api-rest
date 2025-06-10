# 🚀 Node.js + MySQL + Docker Configuration

Este proyecto demuestra cómo configurar correctamente una aplicación Node.js con Express, MySQL y Docker, aplicando las mejores prácticas de programación y arquitectura de software.

## ✨ Características

- ✅ **Arquitectura Modular**: Separación clara de responsabilidades
- ✅ **Pool de Conexiones MySQL**: Configuración optimizada para producción
- ✅ **Patrón Singleton**: Una sola instancia de base de datos
- ✅ **Manejo de Errores Robusto**: Try-catch en todas las operaciones
- ✅ **Consultas Preparadas**: Protección contra SQL injection
- ✅ **Docker Ready**: Configuración completa con Docker Compose
- ✅ **Variables de Entorno**: Configuración segura y flexible
- ✅ **Logging Estructurado**: Mensajes informativos y organizados

## 🛠 Tecnologías

- [Node.js](https://nodejs.org/) - Runtime de JavaScript
- [Express.js](https://expressjs.com/) - Framework web minimalista
- [MySQL](https://www.mysql.com/) - Base de datos relacional
- [Docker](https://www.docker.com/) - Containerización
- [mysql2](https://github.com/sidorares/node-mysql2) - Driver MySQL para Node.js
- [dotenv](https://github.com/motdotla/dotenv) - Gestión de variables de entorno

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

- PORT_SERVER=xxxxxx
- MYSQL_LOCAL_HOST=localhost
- local MYSQL_DOCKER_HOST=xxxxx
- MYSQL_DOCKER_PORT=xxxxx
- MYSQL_LOCAL_PORT=xxxxxx
- MYSQL_USER=root
- MYSQL_PASSWORD=xxxxx
- MYSQL_DATABASE=xxxxx

_Proyecto creado con fines educativos para demostrar la configuración de Node.js + MySQL + Docker_
