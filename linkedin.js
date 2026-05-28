const { chromium } = require('playwright');
const fs = require('fs');

(async () => {

  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  const allJobs = [];

  // =========================
  // REMOTOS INTERNACIONALES
  // =========================

  await page.goto(
    'https://www.linkedin.com/jobs/search/?keywords=cybersecurity&f_WT=2'
  );

  await page.waitForTimeout(5000);

  const remoteJobs = await page.$$eval(
    '.base-search-card',
    cards => cards.slice(0,2).map(card => ({

      cargo: card.querySelector('h3')?.innerText?.trim(),

      empresa: card.querySelector('h4')?.innerText?.trim(),

      link: card.querySelector('a')?.href,

      modalidad: 'Remoto Internacional'

    }))
  );

  allJobs.push(...remoteJobs);

  // =========================
  // ECUADOR (PRESENCIAL O REMOTO)
  // =========================

  await page.goto(
    'https://www.linkedin.com/jobs/search/?keywords=cybersecurity&location=Ecuador'
  );

  await page.waitForTimeout(5000);

  const ecuJobs = await page.$$eval(
    '.base-search-card',
    cards => cards.slice(0,2).map(card => ({

      cargo: card.querySelector('h3')?.innerText?.trim(),

      empresa: card.querySelector('h4')?.innerText?.trim(),

      link: card.querySelector('a')?.href,

      modalidad: 'Ecuador'

    }))
  );

  allJobs.push(...ecuJobs);

  // =========================
  // ELIMINAR DUPLICADOS
  // =========================

  const uniqueJobs = allJobs.filter(
    (job, index, self) =>
      index === self.findIndex(j =>
        j.link === job.link
      )
  );

  // =========================
  // GUARDAR JSON
  // =========================

  fs.writeFileSync(
    'C:\\Users\\USER\\.n8n-files\\jobs.json',
    JSON.stringify(uniqueJobs, null, 2)
  );

  console.log('Vacantes actualizadas');

  await browser.close();

})();