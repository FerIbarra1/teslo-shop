# Descripción

## Correr en Dev

1. Clonar el repositorio
2. Crear una copia del ``` .env.template ``` y renombrarlo a ``` .env ``` y cambiar las variables de entorno
3. Instalar dependencias ``` pnpm install ```
4. Levantar la base de datos ``` docker compose up -d ``` 
5. Correr las migraciones de Prisma ``` npx prisma migrate dev ```
6. Ejecutar seed ``` pnpm run dev ```
6. Instalar dependencias ``` pnpm run dev ```

## Correr en prod