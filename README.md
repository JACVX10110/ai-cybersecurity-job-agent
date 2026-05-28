# AI Cybersecurity Job Agent

Agente de IA automatizado para búsqueda y análisis de vacantes de ciberseguridad utilizando Ollama, Playwright, n8n, Telegram y Google Sheets.

---

# Descripción

Este proyecto automatiza la búsqueda de vacantes relacionadas con ciberseguridad desde LinkedIn, analiza si las ofertas son adecuadas para un perfil junior utilizando IA local con Ollama y envía los resultados automáticamente a Telegram y Google Sheets.

El sistema fue diseñado para funcionar completamente de manera automática sin utilizar APIs pagadas ni consumo de tokens externos.

---

# Funcionalidades

- Scraping automatizado de vacantes desde LinkedIn
- Filtrado de trabajos remotos internacionales
- Búsqueda de vacantes presenciales en Ecuador
- Análisis de compatibilidad utilizando IA local con Ollama
- Comparación básica entre vacantes y CV
- Notificaciones automáticas por Telegram
- Registro automático en Google Sheets
- Automatización mediante n8n
- Ejecución programada con Windows Task Scheduler

---

# Tecnologías utilizadas

- Node.js
- Playwright
- Ollama
- n8n
- Telegram Bot API
- Google Sheets API
- Windows Task Scheduler

---

# Arquitectura del flujo

LinkedIn Scraper → jobs.json → n8n → Ollama → Telegram + Google Sheets


# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/ai-cybersecurity-job-agent.git
```

---

## 2. Entrar al proyecto

```bash
cd ai-cybersecurity-job-agent
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Instalar Playwright

```bash
npx playwright install
```

---

## 5. Instalar Ollama

Descargar desde:

https://ollama.com

Luego instalar modelo:

```bash
ollama pull qwen2.5
```

---

# Cómo ejecutar

## Ejecutar scraper

```bash
node linkedin.js
```

---

## Ejecutar n8n

```bash
n8n
```

---

# Workflow de n8n

Importar el archivo:

```txt
Linkedin Workflow.json
```

dentro de n8n.

---

# Automatización

El sistema fue configurado para ejecutarse automáticamente:

- Lunes
- Miércoles
- Viernes
- 7:00 AM

utilizando Windows Task Scheduler y Schedule Trigger en n8n.


## Screenshots

## Workflow n8n
![Workflow](screenshots/workflow.png)


## Telegram Bot
![Workflow](screenshots/telegram.png)


## Google Sheets
![Workflow](screenshots/googlesheets.png)


## Autor

Javier Calvachi

Proyecto personal orientado a automatización, IA aplicada y ciberseguridad.
