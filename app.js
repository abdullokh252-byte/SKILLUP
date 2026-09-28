const KEY='skillup_state_v1';
const DEFAULT={name:'Абдуллох',activeSkill:'English',route:'home',currentLesson:0,theme:'dark',totalMinutes:0,progress:{}};
const lessons={
English:[['Знакомство','Изучи 10 базовых слов и составь 5 простых предложений.'],['Новые слова','Выучи 15 слов на тему повседневной жизни.'],['Present Simple','Повтори правила и составь 10 предложений.'],['Вопросы','Составь 10 простых вопросов на английском.'],['Listening','Послушай короткое видео и выпиши 5 новых слов.'],['Speaking','Расскажи о себе в течение одной минуты.'],['Повторение','Повтори материалы первых шести дней.'],['Past Simple','Изучи Past Simple и составь 10 предложений.'],['Future','Изучи способы говорить о будущем.'],['Описание','Опиши свою комнату на английском.'],['Чтение','Прочитай короткий текст и выпиши незнакомые слова.'],['Vocabulary','Выучи 20 полезных слов.'],['Speaking','Расскажи о любимом виде спорта.'],['Listening','Послушай диалог и перескажи смысл.'],['Грамматика','Повтори основные времена.'],['Мини-тест','Проверь себя по материалу первых двух недель.'],['Новые слова','Выучи 20 слов по интересующей теме.'],['Writing','Напиши текст о своём обычном дне.'],['Speaking','Говори на английском 2 минуты.'],['Listening','Посмотри видео без субтитров.'],['Чтение','Прочитай одну страницу простой книги.'],['Грамматика','Повтори ошибки, которые допускаешь.'],['Полезные фразы','Выучи 20 разговорных фраз.'],['Speaking','Расскажи о своих целях.'],['Listening','Послушай подкаст для начинающих.'],['Writing','Напиши письмо себе в будущем.'],['Повторение','Повтори слова за предыдущие дни.'],['Практика','10 минут используй только английский.'],['Финальный тест','Проверь знания за месяц.'],['Финальный день','Расскажи, чему ты научился за 30 дней.']],
Programming:[['Что такое код','Разберись, как работают программы и языки.'],['HTML','Создай простую HTML-страницу.'],['CSS','Измени цвет, размер и расположение элементов.'],['Кнопки','Создай красивую кнопку с CSS.'],['JavaScript','Напиши первую JavaScript-функцию.'],['Переменные','Создай переменные и выведи их.'],['Повторение','Повтори всё за первую неделю.'],['Условия','Изучи if / else и сделай проверку.'],['Циклы','Познакомься с циклами.'],['Массивы','Создай массив из нескольких значений.'],['Функции','Напиши три собственные функции.'],['DOM','Измени HTML-элемент через JavaScript.'],['События','Сделай кнопку, реагирующую на клик.'],['Мини-проект','Создай простой счётчик.'],['Повторение','Повтори основные конструкции JS.'],['Мини-тест','Проверь свои знания.'],['Формы','Создай простую форму.'],['Валидация','Добавь проверку формы.'],['Карточки','Создай интерактивные карточки.'],['Анимации','Добавь CSS-анимацию.'],['LocalStorage','Сохрани данные в браузере.'],['API','Узнай, что такое API.'],['Fetch','Познакомься с получением данных.'],['Проект','Начни собственный маленький проект.'],['Адаптивность','Сделай проект удобным на телефоне.'],['Ошибки','Научись находить и исправлять ошибки.'],['Оптимизация','Сделай код аккуратнее.'],['Финальный проект','Собери всё в одном проекте.'],['Тестирование','Протестируй проект.'],['Финальный день','Опубликуй свой первый проект.']],
Design:[['Основы дизайна','Узнай основные принципы визуального дизайна.'],['Цвет','Изучи сочетание цветов.'],['Типографика','Познакомься с работой со шрифтами.'],['Композиция','Изучи правила размещения элементов.'],['Контраст','Создай контрастный экран.'],['Сетка','Создай простую сетку интерфейса.'],['Повторение','Повтори изученное.'],['UI','Разбери структуру интерфейса.'],['UX','Узнай разницу между UI и UX.'],['Карточки','Создай карточку продукта.'],['Кнопки','Создай несколько вариантов кнопок.'],['Формы','Создай современную форму.'],['Мобильный дизайн','Сделай макет для телефона.'],['Лендинг','Нарисуй структуру лендинга.'],['Повторение','Проанализируй свои работы.'],['Мини-проект','Создай экран приложения.'],['Палитры','Составь три цветовые палитры.'],['Иконки','Изучи использование иконок.'],['Отступы','Потренируйся с правильными отступами.'],['Иерархия','Выдели главный элемент экрана.'],['Редизайн','Переделай знакомый сайт.'],['Адаптивность','Сделай макет для двух размеров.'],['Прототип','Создай простой прототип.'],['Анимации','Добавь идею анимации.'],['Брендинг','Придумай визуальный стиль бренда.'],['Проект','Начни полноценный дизайн-проект.'],['Исправления','Найди слабые места проекта.'],['Финализация','Заверши основные экраны.'],['Проверка','Проверь удобство интерфейса.'],['Финальный день','Собери первую работу в портфолио.']],
Marketing:[['Что такое маркетинг','Разберись в основных понятиях.'],['Целевая аудитория','Определи аудиторию для продукта.'],['Контент','Придумай 10 идей для контента.'],['Социальные сети','Изучи особенности платформ.'],['Бренд','Придумай простой бренд.'],['Copywriting','Напиши продающий заголовок.'],['Повторение','Повтори первую неделю.'],['Контент-план','Создай контент-план на 7 дней.'],['Видео','Придумай сценарий короткого видео.'],['Аналитика','Узнай основные метрики.'],['Конкуренты','Проанализируй 3 конкурента.'],['Реклама','Изучи основы рекламных кампаний.'],['Вовлечённость','Придумай способ повысить активность.'],['Опрос','Создай небольшой опрос.'],['Повторение','Повтори основные понятия.'],['Мини-тест','Проверь свои знания.'],['Reels','Придумай 5 идей коротких видео.'],['TikTok','Разбери структуру ролика.'],['Instagram','Создай концепцию страницы бренда.'],['Текст','Напиши пост для аудитории.'],['Email','Придумай рекламное письмо.'],['Стратегия','Составь маркетинговую стратегию.'],['Продажи','Изучи путь клиента.'],['Воронка','Разберись с воронкой продаж.'],['Проект','Начни кампанию.'],['Анализ','Посмотри, что улучшить.'],['Оптимизация','Улучши стратегию.'],['Финальный проект','Создай план продвижения.'],['Проверка','Проверь все этапы.'],['Финальный день','Презентуй стратегию.']]
};
const skillInfo={English:['🇬🇧','Словарный запас, грамматика, speaking и listening.'],Programming:['💻','HTML, CSS, JavaScript и первые реальные проекты.'],Design:['🎨','Цвет, композиция, UI/UX и интерфейсы.'],Marketing:['📱','Контент, аудитория, продвижение и стратегия.']};
let state=load();
const SUPABASE_URL='https://wzypdluaucloihhorgsf.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_EStyx7kfBUB7xYquxBwpJA_HraVy5Ry';
const supabaseClient=window.supabase?.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
let currentUser=null;
let authMode='login';
let cloudSaveTimer=null;
let authReady=false;
for(const k of Object.keys(lessons)){ if(!state.progress[k]||!Array.isArray(state.progress[k].completed)||!Array.isArray(state.progress[k].dates)) state.progress[k]={completed:[],dates:[]}; }
function cloneDefault(){return JSON.parse(JSON.stringify(DEFAULT))}function load(){try{return {...cloneDefault(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return cloneDefault()}}
function save(){localStorage.setItem(KEY,JSON.stringify(state));updateGlobal();scheduleCloudSave()}

function ensureProgress(s){
  s.progress=s.progress||{};
  for(const k of Object.keys(lessons)){
    if(!s.progress[k]||!Array.isArray(s.progress[k].completed)||!Array.isArray(s.progress[k].dates)) s.progress[k]={completed:[],dates:[]};
  }
  return s;
}
function mergeCloudState(cloud){
  const local=state;
  const merged={...cloneDefault(),...cloud};
  merged.progress=cloud.progress||{};
  ensureProgress(merged);
  if(!merged.name) merged.name=local.name||'Ученик';
  return merged;
}
function scheduleCloudSave(){
  if(!currentUser||!authReady)return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer=setTimeout(saveCloud,700);
}
async function saveCloud(){
  if(!currentUser||!authReady)return;
  const payload={user_id:currentUser.id,state,updated_at:new Date().toISOString()};
  const {error}=await supabaseClient.from('user_data').upsert(payload,{onConflict:'user_id'});
  if(error) console.error('Cloud save error:',error);
}
async function loadCloudState(user){
  currentUser=user;
  try{
    const {data,error}=await supabaseClient.from('user_data').select('state').eq('user_id',user.id).maybeSingle();
    if(error) throw error;
    if(data?.state){
      state=mergeCloudState(data.state);
      localStorage.setItem(KEY,JSON.stringify(state));
    }else{
      state=ensureProgress(state);
      if(user.user_metadata?.name && (!state.name || state.name==='Ученик' || state.name==='Абдуллох')) state.name=user.user_metadata.name;
      await saveCloud();
    }
    authReady=true;
    applyTheme();
    updateGlobal();
    route(state.route||'home');
  }catch(err){
    console.error(err);
    authReady=true;
    applyTheme();
    updateGlobal();
    route(state.route||'home');
    toast('Не удалось загрузить облачный прогресс');
  }
}
function showAuthMessage(message,type='info'){
  const el=document.getElementById('authMessage');
  el.textContent=message||'';
  el.className='auth-message '+type;
}
function setAuthMode(mode){
  authMode=mode;
  const signup=mode==='signup';
  document.getElementById('loginTab').classList.toggle('active',!signup);
  document.getElementById('signupTab').classList.toggle('active',signup);
  document.getElementById('nameField').classList.toggle('hidden',!signup);
  document.getElementById('authTitle').textContent=signup?'Создать аккаунт':'Войти в SKILLUP';
  document.getElementById('authSubtitle').textContent=signup?'Создай аккаунт и сохраняй прогресс в облаке.':'Сохраняй прогресс и продолжай обучение с любого устройства.';
  document.getElementById('authSubmit').textContent=signup?'Создать аккаунт':'Войти';
  document.getElementById('authPassword').autocomplete=signup?'new-password':'current-password';
  showAuthMessage('');
}
function showAuth(){
  document.body.classList.add('auth-pending');
  document.body.classList.remove('app-ready');
  document.getElementById('authGate').style.display='grid';
  document.getElementById('appRoot').style.display='none';
}
function showApp(){
  document.body.classList.remove('auth-pending');
  document.body.classList.add('app-ready');
  document.getElementById('authGate').style.display='none';
  document.getElementById('appRoot').style.display='block';
}
function authErrorMessage(error){
  const text=(error?.message||'').toLowerCase();
  if(text.includes('invalid login credentials'))return 'Неверный email или пароль.';
  if(text.includes('email not confirmed'))return 'Подтверди email через письмо от Supabase, затем войди.';
  if(text.includes('already registered')||text.includes('already been registered'))return 'Этот email уже зарегистрирован.';
  if(text.includes('password'))return 'Проверь пароль: минимум 6 символов.';
  return error?.message||'Произошла ошибка. Попробуй ещё раз.';
}
async function submitAuth(event){
  event.preventDefault();
  const email=document.getElementById('authEmail').value.trim();
  const password=document.getElementById('authPassword').value;
  const name=document.getElementById('authName').value.trim();
  const button=document.getElementById('authSubmit');
  if(password.length<6){showAuthMessage('Пароль должен содержать минимум 6 символов.','error');return}
  button.disabled=true;
  showAuthMessage(authMode==='signup'?'Создаём аккаунт…':'Выполняем вход…');
  try{
    if(authMode==='signup'){
      const {data,error}=await supabaseClient.auth.signUp({email,password,options:{data:{name:name||'Ученик'}}});
      if(error)throw error;
      if(data.session){
        toast('Аккаунт создан 🎉');
      }else{
        showAuthMessage('Аккаунт создан. Проверь почту и нажми ссылку подтверждения, затем войди.','success');
      }
    }else{
      const {error}=await supabaseClient.auth.signInWithPassword({email,password});
      if(error)throw error;
    }
  }catch(error){showAuthMessage(authErrorMessage(error),'error')}
  finally{button.disabled=false}
}
async function signOut(){
  await supabaseClient.auth.signOut();
}
async function initAuth(){
  if(!supabaseClient){showAuth();showAuthMessage('Не удалось загрузить библиотеку авторизации.','error');return}
  setAuthMode('login');
  document.getElementById('loginTab').onclick=()=>setAuthMode('login');
  document.getElementById('signupTab').onclick=()=>setAuthMode('signup');
  document.getElementById('authForm').onsubmit=submitAuth;
  const {data}=await supabaseClient.auth.getSession();
  if(data.session){showApp();await loadCloudState(data.session.user)}else{showAuth()}
  supabaseClient.auth.onAuthStateChange((_event,session)=>{
    setTimeout(async()=>{
      if(session){showApp();await loadCloudState(session.user)}else{currentUser=null;authReady=false;showAuth();setAuthMode('login')}
    },0)
  });
}

function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function streak(k){const ds=[...new Set(state.progress[k].dates||[])].sort().reverse();if(!ds.length)return 0;let cur=today();if(ds[0]!==cur){const a=new Date(ds[0]),b=new Date(cur);if(Math.round((b-a)/86400000)>1)return 0;cur=ds[0]}let n=0;for(const d of ds){if(d!==cur)break;n++;const x=new Date(cur);x.setDate(x.getDate()-1);cur=todayOf(x)}return n}
function todayOf(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function pct(k){return Math.round(state.progress[k].completed.length/30*100)}
function totalLessons(){return Object.values(state.progress).reduce((n,p)=>n+p.completed.length,0)}
function rank(){const n=totalLessons();if(n>=80)return'🌟 Легенда';if(n>=40)return'🏆 Продвинутый';if(n>=20)return'⚡ В ритме';if(n>=5)return'🚀 Начинающий';return'🌱 Первый шаг'}
const achievements=[['first','🚀','Первый шаг','Выполни 1 урок',s=>s.total>=1],['week','🔥','7 дней','Выполни 7 уроков',s=>s.total>=7],['half','⚡','Половина пути','Выполни 15 уроков',s=>s.total>=15],['master','🏆','30 из 30','Заверши один курс',s=>Object.values(state.progress).some(p=>p.completed.length>=30)],['series3','🔥','Серия ×3','Учись 3 дня подряд',s=>s.streak>=3],['series7','💎','Серия ×7','Учись 7 дней подряд',s=>s.streak>=7],['multi','🧠','Исследователь','Попробуй два навыка',s=>Object.values(state.progress).filter(p=>p.completed.length>0).length>=2],['all','🌟','Все навыки','Заверши четыре курса',s=>Object.values(state.progress).every(p=>p.completed.length>=30)]];
function achData(){return {total:totalLessons(),streak:streak(state.activeSkill)}}
function route(r){state.route=r;save();document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));const v=document.getElementById('view-'+r);if(v)v.classList.add('active');document.querySelectorAll('[data-route]').forEach(x=>x.classList.toggle('active',x.dataset.route===r));document.getElementById('routeLabel').textContent={home:'Главная',learn:'Обучение',achievements:'Достижения',profile:'Профиль',settings:'Настройки'}[r]||'SKILLUP';render(r);closeMenu();scrollTo(0,0)}
function render(r){if(r==='home')home();if(r==='learn')learn();if(r==='achievements')achievementsView();if(r==='profile')profile();if(r==='settings')settings()}
function home(){const k=state.activeSkill,d=skillInfo[k],p=state.progress[k],idx=Math.min(p.completed.length,29);document.getElementById('view-home').innerHTML=`<div class="page"><div class="hero"><div><div class="eyebrow">30-ДНЕВНЫЙ ЧЕЛЛЕНДЖ</div><h1>Освой <span>навык</span><br>шаг за шагом.</h1><p>Один урок в день, понятные задания и видимый прогресс. Без перегруза — только регулярность.</p><div class="hero-actions"><button class="btn primary" id="continue">Продолжить обучение →</button><button class="btn ghost" id="choose">Выбрать навык</button></div></div><div class="orb"><div class="orb-ring"></div><div class="orb-icon">${d[0]}</div><div class="orb-pct">${pct(k)}%</div></div></div><div class="stats"><div class="stat"><div class="stat-icon">🔥</div><div><div class="muted">Серия</div><strong>${streak(k)} дней</strong></div></div><div class="stat"><div class="stat-icon">✓</div><div><div class="muted">Все уроки</div><strong>${totalLessons()}</strong></div></div><div class="stat"><div class="stat-icon">⏱</div><div><div class="muted">Минуты</div><strong>${state.totalMinutes}</strong></div></div><div class="stat"><div class="stat-icon">★</div><div><div class="muted">Ранг</div><strong>${rank()}</strong></div></div></div><div class="section-head"><div><div class="eyebrow">ТЕКУЩАЯ ПРОГРАММА</div><h2>${d[0]} ${k}</h2></div><button class="text-btn" id="allDays">Открыть все 30 дней →</button></div><div class="grid2"><div class="panel"><div class="label">СЛЕДУЮЩИЙ УРОК</div><div class="big-num">${idx+1}</div><h3>${lessons[k][idx][0]}</h3><p>${lessons[k][idx][1]}</p><div class="row"><span>Прогресс</span><b>${pct(k)}%</b></div><div class="progress"><i style="width:${pct(k)}%"></i></div><button class="btn primary full" id="openNext">Открыть урок</button></div><div class="panel"><div class="label">НАВЫКИ</div><div class="skills">${Object.keys(lessons).map(x=>`<button class="skill ${x===k?'active':''}" data-skill="${x}"><span class="skill-icon">${skillInfo[x][0]}</span><span><b>${x}</b><small>${pct(x)}% пройдено</small></span><span class="mini"><i style="width:${pct(x)}%"></i></span></button>`).join('')}</div></div></div></div>`;document.getElementById('continue').onclick=()=>openLesson(idx);document.getElementById('choose').onclick=()=>{route('learn');setTimeout(()=>document.getElementById('skillSwitch')?.scrollIntoView({behavior:'smooth',block:'center'}),80)};document.getElementById('allDays').onclick=()=>route('learn');document.getElementById('openNext').onclick=()=>openLesson(idx);document.querySelectorAll('[data-skill]').forEach(b=>b.onclick=()=>{state.activeSkill=b.dataset.skill;save();home();window.scrollTo({top:0,behavior:'smooth'});toast('Выбран навык: '+b.dataset.skill)})}
function learn(){const k=state.activeSkill,p=state.progress[k];document.getElementById('view-learn').innerHTML=`<div class="page"><div class="section-head"><div><div class="eyebrow">ОБУЧЕНИЕ</div><h1>${skillInfo[k][0]} ${k}</h1><p class="muted">${skillInfo[k][1]}</p></div><div class="large-pct">${pct(k)}%</div></div><div class="learn-progress"><div class="row"><span>${p.completed.length} из 30 уроков</span><b>${pct(k)}%</b></div><div class="progress"><i style="width:${pct(k)}%"></i></div></div><div class="pillbar" id="skillSwitch">${Object.keys(lessons).map(x=>`<button class="pill ${x===k?'active':''}" data-switch="${x}">${skillInfo[x][0]} ${x}</button>`).join('')}</div><div class="days">${lessons[k].map((l,i)=>{const done=p.completed.includes(i),cur=!done&&i===p.completed.length;return `<button class="day ${done?'done':''} ${cur?'current':''}" data-day="${i}"><div class="day-top"><span>ДЕНЬ ${String(i+1).padStart(2,'0')}</span><span>${done?'✓':cur?'→':''}</span></div><h3>${l[0]}</h3><p>${done?'Урок выполнен':l[1]}</p></button>`}).join('')}</div></div>`;document.querySelectorAll('[data-switch]').forEach(b=>b.onclick=()=>{state.activeSkill=b.dataset.switch;save();learn()});document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>openLesson(+b.dataset.day))}
function openLesson(i){state.currentLesson=i;save();const k=state.activeSkill,p=state.progress[k],l=lessons[k][i],done=p.completed.includes(i),locked=i>p.completed.length;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));const v=document.getElementById('view-lesson');v.classList.add('active');document.getElementById('routeLabel').textContent=`День ${i+1}`;v.innerHTML=`<div class="lesson-page"><button class="back" id="back">← Все дни</button><div class="lesson-card"><div class="lesson-meta"><span class="eyebrow">${skillInfo[k][0]} ${k}</span><span class="counter">ДЕНЬ ${i+1} / 30</span></div><h1>${l[0]}</h1><p class="lead">${l[1]}</p><div class="mission"><div class="mission-icon">🎯</div><div><div class="label">ЗАДАНИЕ НА СЕГОДНЯ</div><h3>Сделай один конкретный шаг</h3><p>Удели заданию 10–20 минут. Главная цель — регулярность.</p></div></div><div class="check ${done?'done':''}"><div class="check-main"><div class="checkbox">${done?'✓':''}</div><div><b>${done?'День завершён':'Готов закончить этот день?'}</b><p>${done?'Отлично! Продолжай.':'После выполнения открой следующий урок.'}</p></div></div><button class="btn primary" id="complete" ${locked?'disabled':''}>${done?'✓ Выполнено':'Завершить день'}</button></div>${locked?'<div class="muted" style="margin-top:12px">🔒 Сначала заверши предыдущие уроки.</div>':''}<div class="lesson-nav"><button class="btn ghost" id="prev" ${i===0?'disabled':''}>← Предыдущий</button><button class="btn ghost" id="next" ${i===29?'disabled':''}>Следующий →</button></div></div></div>`;document.getElementById('back').onclick=()=>route('learn');document.getElementById('complete').onclick=()=>complete(i);document.getElementById('prev').onclick=()=>openLesson(Math.max(0,i-1));document.getElementById('next').onclick=()=>openLesson(Math.min(29,i+1))}
function complete(i){const k=state.activeSkill,p=state.progress[k];if(i>p.completed.length)return;if(!p.completed.includes(i)){p.completed.push(i);p.completed.sort((a,b)=>a-b);p.dates.push(today());state.totalMinutes+=15;save();checkAchievements();toast('Урок завершён! +15 минут 🎉')}if(i<29)openLesson(i+1);else openLesson(i)}
function achievementsView(){const d=achData(),unlocked=achievements.filter(a=>a[4](d)).length;document.getElementById('view-achievements').innerHTML=`<div class="page"><div class="section-head"><div><div class="eyebrow">ДОСТИЖЕНИЯ</div><h1>Твои награды</h1><p class="muted">Награды открываются автоматически по мере прогресса.</p></div></div><div class="ach-summary"><div class="ring"><strong>${unlocked}</strong><span>/ ${achievements.length}</span></div><div><h2>${rank()}</h2><p class="muted">Продолжай заниматься каждый день.</p></div></div><div class="ach-grid">${achievements.map(a=>{const ok=a[4](d);return `<div class="ach ${ok?'':'locked'}"><div class="ach-icon">${ok?a[1]:'🔒'}</div><div><b>${a[2]}</b><p>${a[3]}</p></div></div>`}).join('')}</div></div>`}
function profile(){document.getElementById('view-profile').innerHTML=`<div class="page"><div class="profile"><div class="profile-avatar">${escapeHtml((state.name||'A')[0].toUpperCase())}</div><div><div class="eyebrow">ПРОФИЛЬ</div><h1>${escapeHtml(state.name)}</h1><p class="muted">${rank()}</p></div></div><div class="stats"><div class="stat"><div class="stat-icon">🔥</div><div><div class="muted">Серия</div><strong>${streak(state.activeSkill)} дней</strong></div></div><div class="stat"><div class="stat-icon">✓</div><div><div class="muted">Уроки</div><strong>${totalLessons()}</strong></div></div><div class="stat"><div class="stat-icon">⏱</div><div><div class="muted">Минуты</div><strong>${state.totalMinutes}</strong></div></div><div class="stat"><div class="stat-icon">★</div><div><div class="muted">Навык</div><strong>${state.activeSkill}</strong></div></div></div><div class="section-head"><div><div class="eyebrow">ПРОГРЕСС</div><h2>Твои навыки</h2></div></div><div class="profile-grid">${Object.keys(lessons).map(k=>`<div class="profile-card"><div class="row" style="margin-top:0"><span>${skillInfo[k][0]} ${k}</span><b>${pct(k)}%</b></div><div class="progress"><i style="width:${pct(k)}%"></i></div><small style="display:block;margin-top:8px;color:var(--muted)">${state.progress[k].completed.length} / 30 уроков</small></div>`).join('')}</div></div>`}
function settings(){document.getElementById('view-settings').innerHTML=`<div class="page narrow"><div class="section-head"><div><div class="eyebrow">НАСТРОЙКИ</div><h1>Настройки</h1><p class="muted">Персонализируй SKILLUP.</p></div></div><div class="setting"><div class="setting-row"><div><b>Имя</b><small>Отображается в профиле</small></div><input class="input" id="name" value="${escAttr(state.name)}"></div><div class="setting-row"><div><b>Тема</b><small>Внешний вид приложения</small></div><select class="input" id="theme"><option value="dark">Тёмная</option><option value="light">Светлая</option></select></div></div><div class="setting"><div class="setting-row"><div><b>Сбросить прогресс</b><small>Удалит выполненные уроки и статистику.</small></div><button class="btn danger" id="reset">Сбросить</button></div></div><div class="setting"><div class="setting-row"><div><b>Облачное сохранение</b><small>${currentUser?escapeHtml(currentUser.email||'Аккаунт подключён'):'Аккаунт не подключён'}</small></div><span class="muted">SUPABASE</span></div></div><div class="setting"><div class="setting-row"><div><b>Аккаунт</b><small>Выйти из текущего аккаунта на этом устройстве.</small></div><button class="btn ghost" id="logout">Выйти</button></div></div></div>`;document.getElementById('theme').value=state.theme;document.getElementById('name').onchange=e=>{state.name=e.target.value.trim()||'Ученик';save();toast('Имя сохранено')};document.getElementById('theme').onchange=e=>{state.theme=e.target.value;save();applyTheme()};document.getElementById('reset').onclick=()=>{if(confirm('Сбросить весь прогресс?')){state.progress={};for(const k of Object.keys(lessons))state.progress[k]={completed:[],dates:[]};state.totalMinutes=0;save();route('home');toast('Прогресс сброшен')}};document.getElementById('logout').onclick=signOut}
function updateGlobal(){document.getElementById('sidebarStreak').textContent=`${streak(state.activeSkill)} ${plural(streak(state.activeSkill),'день','дня','дней')}`}
function plural(n,a,b,c){const x=n%10,y=n%100;return x===1&&y!==11?a:x>=2&&x<=4&&(y<10||y>=20)?b:c}
function checkAchievements(){const seen=JSON.parse(localStorage.getItem(KEY+'_ach')||'[]');const d=achData();achievements.forEach(a=>{if(!seen.includes(a[0])&&a[4](d)){seen.push(a[0]);setTimeout(()=>toast(`Новое достижение: ${a[2]} 🎉`),300)}});localStorage.setItem(KEY+'_ach',JSON.stringify(seen))}
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('show'),2400)}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}function escAttr(s){return escapeHtml(s)}
function applyTheme(){document.body.classList.toggle('light',state.theme==='light')}
function closeMenu(){document.getElementById('sidebar').classList.remove('open');document.getElementById('mobileOverlay').classList.remove('show')}
document.querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>route(b.dataset.route));document.getElementById('mobileMenuBtn').onclick=()=>{document.getElementById('sidebar').classList.add('open');document.getElementById('mobileOverlay').classList.add('show')};document.getElementById('mobileOverlay').onclick=closeMenu;applyTheme();document.getElementById('appRoot').style.display='none';initAuth();if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
