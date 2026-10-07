const TOTAL_PAGES = 150;

const chapterDefs = [
  { number: "01", title: "Sin buscarnos", range: [7, 18], intro: "Al principio, ninguno de los dos sabía que estaba frente a una historia.", paragraphs: [
    "La vida suele esconder sus regalos en momentos sencillos. No los envuelve con cintas ni los anuncia con grandes señales.",
    "A veces, los coloca frente a nosotros mientras estamos concentrados en cualquier otra cosa. Eso hizo contigo: apareciste en medio de lo cotidiano y convertiste lo cotidiano en algo que esperaba con ilusión.",
    "Poco a poco, tu presencia comenzó a tener un lugar propio en mis pensamientos. Había días que parecían más ligeros cuando estabas cerca.",
    "No fue necesario que el mundo cambiara de inmediato. Bastó con que cambiara mi manera de mirarte."
  ]},
  { number: "02", title: "Conversaciones que se quedaron", range: [19, 30], intro: "Cada conversación fue construyendo un puente.", paragraphs: [
    "Al otro lado del puente estabas tú, cada vez más cerca; de este lado estaba yo, descubriendo que podía mostrarme sin miedo.",
    "Contigo, hablar no se sentía como llenar silencios. Se sentía como encontrar un lugar donde mis pensamientos podían descansar.",
    "Me hiciste sentir escuchado, mirado y comprendido. Me recordaste que también era posible encontrar ternura en los días normales.",
    "Desde entonces, cada charla tuvo algo de encuentro y algo de promesa."
  ]},
  { number: "03", title: "Cuando el mundo se detenía", range: [31, 42], intro: "Había una manera tuya de sonreír que cambiaba el ritmo de mis días.", paragraphs: [
    "Por unos segundos, todo parecía menos urgente. El ruido se alejaba y solo quedaba esa sensación de estar exactamente donde quería estar.",
    "No sé en qué momento empecé a buscarte con la mirada. Solo sé que, cuando aparecías, algo se acomodaba.",
    "El amor también se reconoce así: por la paz que trae, por la alegría que despierta y por ese deseo sencillo de compartir incluso lo más pequeño.",
    "Tu sonrisa convirtió un día común en el comienzo de todo."
  ]},
  { number: "04", title: "El valor de acercarnos", range: [43, 54], intro: "Toda historia verdadera necesita un momento de valentía.", paragraphs: [
    "A veces es una palabra; otras, una mirada que permanece un segundo más. A veces es admitir que alguien nos importa.",
    "Acercarme a ti significó dejar de esconder lo que sentía detrás de la rutina.",
    "Significó permitir que la ilusión tuviera un nombre y que el corazón dejara de fingir que no estaba sucediendo nada.",
    "No sabía qué nos esperaba. Pero había algo en ti que hacía que valiera la pena descubrirlo."
  ]},
  { number: "05", title: "Elegirnos cada día", range: [55, 67], intro: "El amor no vive únicamente en los comienzos.", paragraphs: [
    "Lo que vuelve inolvidable una historia es la decisión de seguir eligiéndose cuando llegan los días fáciles y también los difíciles.",
    "Elegirnos ha sido aprender que el cariño se demuestra en los detalles: preguntar cómo fue el día, cuidar una preocupación, compartir una risa.",
    "Amarte no es solo sentir mariposas. Es reconocer tu humanidad y abrazar tus días buenos y tus días cansados.",
    "Mi lugar no está solamente en las celebraciones, sino también en los momentos en que necesitas compañía."
  ]},
  { number: "06", title: "Los pequeños milagros", range: [68, 79], intro: "Nuestra historia está hecha de instantes que quizá nadie más recuerda.", paragraphs: [
    "Una mirada, una conversación inesperada, un gesto de cuidado, una risa que llegó en el momento exacto.",
    "Los grandes amores no siempre se construyen con escenas extraordinarias. Se construyen con cientos de pequeños milagros repetidos.",
    "Estar, escuchar, perdonar, agradecer, volver a abrazar: ahí también vive la historia.",
    "Cuando pienso en nosotros, pienso en la suma de todos esos momentos."
  ]},
  { number: "07", title: "Cuando llegaron los días difíciles", range: [80, 92], intro: "Ninguna historia está hecha solamente de cielos despejados.", paragraphs: [
    "También existen días nublados, dudas, cansancio y silencios que necesitan tiempo para encontrar su significado.",
    "Nuestro amor ha podido ser refugio. No porque nos haga perfectos, sino porque nos recuerda que no tenemos que enfrentar todo a solas.",
    "Amar también es aprender a hablar con honestidad, pedir perdón con humildad y cuidar el vínculo.",
    "Cada dificultad que atravesamos puede convertirse en una página más de nuestra historia."
  ]},
  { number: "08", title: "Tu manera de cambiar mis días", range: [93, 104], intro: "Desde que llegaste, no todos los días son distintos, pero yo sí aprendí a mirarlos de otra manera.", paragraphs: [
    "Una mañana común puede tener belleza si sé que al final del día podré escucharte.",
    "Me enseñaste que la felicidad no siempre hace ruido. A veces se sienta junto a nosotros en silencio.",
    "A veces cabe en una sonrisa. A veces tiene tu voz.",
    "El futuro me gusta más cuando lo imagino contigo."
  ]},
  { number: "09", title: "Todo lo que todavía nos espera", range: [105, 116], intro: "Nuestra historia no termina en las páginas que ya hemos escrito.", paragraphs: [
    "Hay conversaciones que aún no hemos tenido, lugares que aún no hemos conocido y recuerdos que todavía no existen.",
    "Me emociona pensar que el amor puede seguir sorprendiéndonos.",
    "El futuro no tiene que ser perfecto para ser hermoso; basta con que nos encuentre juntos, dispuestos a caminarlo.",
    "Lo que viene será otra forma de comenzar: con más experiencia, más gratitud y la certeza de cada día compartido."
  ]},
  { number: "10", title: "La promesa", range: [117, 128], intro: "No prometo que todos los días serán fáciles.", paragraphs: [
    "Prometo que, cuando lleguen los días difíciles, recordaré por qué vale la pena quedarme.",
    "Prometo escuchar antes de responder, cuidar antes de juzgar y buscar la ternura incluso cuando el cansancio quiera hablar más fuerte.",
    "Prometo celebrar tus alegrías como si fueran mías y acompañarte en tus tristezas sin intentar apresurarlas.",
    "Prometo seguir conociéndote, porque amar también es aceptar que siempre hay algo nuevo por descubrir."
  ]},
  { number: "11", title: "Gracias por existir en mi vida", range: [129, 138], intro: "Gracias por la persona que eres, por lo que despiertas en mí y por la forma en que haces que el mundo parezca más amable.", paragraphs: [
    "Gracias por cada conversación, cada gesto y cada oportunidad de aprender a amar mejor.",
    "Gracias por recordarme que el corazón puede volver a sentirse joven, capaz de ilusionarse.",
    "Si pudiera volver al primer día, volvería a elegir conocerte.",
    "Volvería a acercarme a esa historia que todavía no sabía que estaba comenzando."
  ]},
  { number: "12", title: "Nuestra historia continúa", range: [139, 146], intro: "Esta no es una historia cerrada. Es un libro vivo, escrito con días, decisiones y recuerdos.", paragraphs: [
    "Algunas páginas tendrán risas; otras, lágrimas. Habrá capítulos tranquilos y capítulos intensos.",
    "Mientras sigamos caminando juntos, cada página tendrá un sentido.",
    "Quiero seguir escribiendo contigo, no porque sepa exactamente qué dirá el futuro, sino porque sé con quién quiero descubrirlo.",
    "Nuestra historia comenzó sin avisar. Y qué hermoso es saber que todavía continúa."
  ]}
];

const originalOpening = "Hay momentos en la vida que parecen comunes y corrientes, instantes en los que el reloj sigue su marcha sin avisarte que el universo está a punto de cambiar por completo. Así comenzó lo nuestro: compartiendo un espacio de trabajo, cruzando palabras rutinarias sin imaginar jamás que estábamos escribiendo el prólogo de la historia más hermosa de nuestras vidas. Te conocí sin buscarte, sin sospechar que detrás de esa primera impresión se escondía el amor más puro e inimaginable que iba a tocar mi puerta. Y entonces, empezamos a hablar. Conversación tras conversación, descubrí algo extraordinario. Empecé a sentir una emoción tan genuina, una chispa tan limpia y luminosa que no experimentaba desde los días de la infancia: la capacidad de reírme a carcajadas, de ilusionarme con la simple presencia de alguien y de sentir que el mundo se detenía cuando me sonreías. En ese instante supe que tú no ibas a ser una persona más en mi rutina. Eras el inicio de algo grande, el despertar de un sentimiento que llegó para quedarse para siempre.";

const pages = [
  { type: "cover", chapter: "Portada", kicker: "Edición íntima", title: "Nuestra|Historia de Amor", meta: "Un libro para volver a encontrarnos" },
  { type: "front", chapter: "Dedicatoria", kicker: "Para ti", title: "Porque la vida|me llevó hasta|tu sonrisa.", copy: "Entre todos los caminos posibles, encontró la manera de llevarme hasta ti.", meta: "Con todo mi amor" },
  { type: "prologue", chapter: "Prólogo", kicker: "El día en que todo cambió", title: "Lo nuestro comenzó|sin avisar.", copy: originalOpening },
  { type: "front", chapter: "Antes de empezar", kicker: "Cómo leer este libro", title: "Pasa la página|cuando estés listo|para volver a encontrarnos.", copy: "Cada hoja guarda una forma distinta de recordar. Desliza, toca las flechas o usa tu teclado para avanzar. Este libro tiene 150 páginas y todavía deja espacio para todo lo que falta vivir." },
  { type: "quote", chapter: "El comienzo", kicker: "Una frase para guardar", quote: "No sabía que te estaba esperando hasta que llegaste." },
  { type: "front", chapter: "El hilo de la historia", kicker: "Doce capítulos y un epílogo", title: "Lo más hermoso|todavía|continúa.", copy: "Desde el primer encuentro hasta las promesas del futuro, esta historia está hecha de pequeños milagros, conversaciones y decisiones de amor." }
];

for (const chapter of chapterDefs) {
  const [start, end] = chapter.range;
  for (let pageNumber = start; pageNumber <= end; pageNumber += 1) {
    const offset = pageNumber - start;
    const isFirst = offset === 0;
    const paragraph = chapter.paragraphs[offset % chapter.paragraphs.length];
    pages[pageNumber - 1] = {
      type: isFirst ? "chapter" : "chapter-text",
      chapter: `Capítulo ${chapter.number} · ${chapter.title}`,
      kicker: isFirst ? `Capítulo ${chapter.number}` : "Nuestra historia",
      title: isFirst ? chapter.title : (offset % 3 === 1 ? "Una página|más de nosotros." : "Y seguimos|escribiendo."),
      copy: isFirst ? chapter.intro : paragraph,
      secondary: isFirst && chapter.paragraphs[0] !== chapter.intro ? chapter.paragraphs[0] : ""
    };
  }
}

pages[146] = { type: "final", chapter: "Epílogo", kicker: "Para siempre empieza hoy", title: "Nuestra historia|no termina|aquí.", copy: "Si el amor tiene una forma, para mí se parece a nosotros: imperfectos, reales, aprendiendo, riendo, volviendo a intentarlo y eligiéndonos una vez más." };
pages[147] = { type: "final", chapter: "Epílogo", kicker: "Una página abierta", title: "El futuro me gusta|más cuando lo|imagino contigo.", copy: "No necesito que la vida nos prometa que todo será sencillo. Me basta con que nos permita seguir encontrándonos en medio de cada día." };
pages[148] = { type: "custom", chapter: "Páginas para personalizar", kicker: "Lo que hace única nuestra historia", title: "Aquí|también|escribes tú.", copy: "Añade los detalles que solo ustedes conocen y convierte este libro en un recuerdo irrepetible.", list: ["Nuestros nombres", "La fecha y el lugar del comienzo", "Una canción, una fotografía, un viaje", "La dedicatoria que quieras dejar"] };
pages[149] = { type: "final", chapter: "Páginas finales", kicker: "Con todo mi amor", title: "Te encontré sin buscarte|y ahora no quiero|dejar de encontrarte nunca.", copy: "La siguiente página nos espera.", meta: "Fin… por ahora." };

while (pages.length < TOTAL_PAGES) pages.push({ type: "front", chapter: "Nuestra historia", kicker: "Una página en blanco", title: "Todavía|hay más|por escribir.", copy: "Esta página está guardada para un recuerdo que aún no existe." });

const state = { current: 0, touchStartX: 0, touchStartY: 0, isPointerDown: false, lastGestureAt: 0 };
const els = {
  page: document.querySelector("#bookPage"), content: document.querySelector("#pageContent"), chapter: document.querySelector("#currentChapter"),
  label: document.querySelector("#pageLabel"), hint: document.querySelector("#readingHint"), progress: document.querySelector("#progressBar"), percent: document.querySelector("#progressPercent"),
  prev: document.querySelector("#prevPage"), next: document.querySelector("#nextPage"), start: document.querySelector("#startReading"), swipeHint: document.querySelector("#swipeHint"),
  tocPanel: document.querySelector("#tocPanel"), tocToggle: document.querySelector("#tocToggle"), tocClose: document.querySelector("#tocClose"), tocBackdrop: document.querySelector("#tocBackdrop"), openIndex: document.querySelector("#openIndex"), nav: document.querySelector("#chapterNav")
};

function titleMarkup(title = "") { return title.split("|").map((line, index) => index === title.split("|").length - 1 ? `<em>${line}</em>` : `<span>${line}</span>`).join("<br />"); }
function escapeHtml(value = "") { return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

function renderPage(direction = "next") {
  const data = pages[state.current] || pages[0];
  els.page.classList.remove("is-next", "is-prev");
  void els.page.offsetWidth;
  els.page.classList.add(direction === "prev" ? "is-prev" : "is-next");
  els.page.setAttribute("aria-label", `Página ${state.current + 1} de ${TOTAL_PAGES}`);
  els.chapter.textContent = data.chapter;
  els.label.textContent = `Página ${state.current + 1} de ${TOTAL_PAGES}`;
  els.progress.style.width = `${((state.current + 1) / TOTAL_PAGES) * 100}%`;
  els.percent.textContent = `${Math.round(((state.current + 1) / TOTAL_PAGES) * 100)}%`;
  els.prev.disabled = state.current === 0;
  els.next.disabled = state.current === TOTAL_PAGES - 1;
  els.hint.textContent = state.current === 0 ? "Desliza para pasar" : state.current === TOTAL_PAGES - 1 ? "Fin del libro" : "Desliza para pasar";

  const coverClass = data.type === "cover" ? "cover-page" : data.type === "front" ? "front-page" : data.type === "custom" ? "custom-page" : data.type === "final" ? "final-page" : data.type === "chapter" ? "chapter-page" : "";
  const copy = data.copy ? `<p class="page-copy">${escapeHtml(data.copy)}</p>` : "";
  const secondary = data.secondary ? `<p class="page-copy">${escapeHtml(data.secondary)}</p>` : "";
  const quote = data.quote ? `<blockquote class="page-quote">${escapeHtml(data.quote)}</blockquote>` : "";
  const list = data.list ? `<ul class="custom-list">${data.list.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "";
  els.content.className = `page-content ${coverClass}`;
  els.content.innerHTML = data.type === "cover"
    ? `<div class="cover-ornament" aria-hidden="true">♡</div><p class="page-kicker">${escapeHtml(data.kicker)}</p><h3 class="page-title">${titleMarkup(data.title)}</h3><p class="page-meta">${escapeHtml(data.meta)}</p>`
    : `<p class="page-kicker">${escapeHtml(data.kicker)}</p><h3 class="page-title">${titleMarkup(data.title)}</h3>${quote}${copy}${secondary}${list}${data.meta ? `<p class="page-meta">${escapeHtml(data.meta)}</p>` : ""}<span class="page-number">${String(state.current + 1).padStart(3, "0")} / ${TOTAL_PAGES}</span>`;
  updateActiveChapter();
}

function goToPage(index, direction) {
  const next = Math.max(0, Math.min(TOTAL_PAGES - 1, index));
  if (next === state.current) return;
  state.current = next;
  renderPage(direction || (next > state.current ? "next" : "prev"));
}
function nextPage() { if (state.current < TOTAL_PAGES - 1) { state.current += 1; renderPage("next"); } }
function prevPage() { if (state.current > 0) { state.current -= 1; renderPage("prev"); } }

function buildNav() {
  const entries = [
    { label: "Portada", page: 1, number: "00" }, { label: "Dedicatoria", page: 2, number: "✦" }, { label: "Prólogo", page: 3, number: "00" },
    ...chapterDefs.map(chapter => ({ label: chapter.title, page: chapter.range[0], number: chapter.number })),
    { label: "Epílogo", page: 147, number: "∞" }, { label: "Páginas finales", page: 149, number: "✦" }
  ];
  els.nav.innerHTML = entries.map(entry => `<button class="chapter-link" type="button" data-page="${entry.page - 1}"><span class="chapter-number">${entry.number}</span><span class="chapter-name">${entry.label}</span><span class="chapter-page">${String(entry.page).padStart(3, "0")}</span></button>`).join("");
  els.nav.querySelectorAll(".chapter-link").forEach(button => button.addEventListener("click", () => { goToPage(Number(button.dataset.page), Number(button.dataset.page) >= state.current ? "next" : "prev"); closeToc(); document.querySelector(".reader-section").scrollIntoView({ behavior: "smooth", block: "start" }); }));
}
function updateActiveChapter() {
  els.nav.querySelectorAll(".chapter-link").forEach(button => button.setAttribute("aria-current", "false"));
  const links = [...els.nav.querySelectorAll(".chapter-link")];
  const active = links.reduce((found, link) => Number(link.dataset.page) <= state.current ? link : found, links[0]);
  if (active) active.setAttribute("aria-current", "true");
}
function openToc() { els.tocPanel.classList.add("is-open"); els.tocPanel.setAttribute("aria-hidden", "false"); els.tocToggle.setAttribute("aria-expanded", "true"); els.tocClose.focus(); }
function closeToc() { els.tocPanel.classList.remove("is-open"); els.tocPanel.setAttribute("aria-hidden", "true"); els.tocToggle.setAttribute("aria-expanded", "false"); els.tocToggle.focus(); }

els.prev.addEventListener("click", prevPage); els.next.addEventListener("click", nextPage);
els.start.addEventListener("click", () => { document.querySelector(".reader-section").scrollIntoView({ behavior: "smooth", block: "start" }); setTimeout(() => els.page.focus(), 500); });
els.tocToggle.addEventListener("click", openToc); els.openIndex.addEventListener("click", openToc); els.tocClose.addEventListener("click", closeToc); els.tocBackdrop.addEventListener("click", closeToc);
document.addEventListener("keydown", (event) => { if (event.key === "ArrowRight" || event.key === "PageDown") nextPage(); if (event.key === "ArrowLeft" || event.key === "PageUp") prevPage(); if (event.key === "Escape" && els.tocPanel.classList.contains("is-open")) closeToc(); });
function applySwipe(startX, startY, endX, endY) {
  const now = Date.now();
  if (now - state.lastGestureAt < 300) return;
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
    state.lastGestureAt = now;
    deltaX < 0 ? nextPage() : prevPage();
  }
}
els.page.addEventListener("pointerdown", (event) => { state.isPointerDown = true; state.touchStartX = event.clientX; state.touchStartY = event.clientY; els.page.setPointerCapture?.(event.pointerId); });
els.page.addEventListener("pointerup", (event) => { if (!state.isPointerDown) return; state.isPointerDown = false; applySwipe(state.touchStartX, state.touchStartY, event.clientX, event.clientY); });
els.page.addEventListener("pointercancel", () => { state.isPointerDown = false; });
els.page.addEventListener("touchstart", (event) => { const touch = event.changedTouches[0]; if (touch) { state.touchStartX = touch.clientX; state.touchStartY = touch.clientY; } }, { passive: true });
els.page.addEventListener("touchend", (event) => { const touch = event.changedTouches[0]; if (touch) applySwipe(state.touchStartX, state.touchStartY, touch.clientX, touch.clientY); }, { passive: true });
buildNav(); renderPage("next");
