(() => {
  const box=document.createElement('div');
  box.className='lightbox';box.hidden=true;box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-label','Publication artwork');
  box.innerHTML='<button type="button">Close ✕</button><a target="_blank" rel="noopener">Open original image ↗</a><img alt="Original publication artwork">';
  document.body.append(box);
  let priorFocus;
  function close(){box.hidden=true;document.body.style.overflow='';priorFocus?.focus();}
  box.querySelector('button').addEventListener('click',close);
  box.addEventListener('click',e=>{if(e.target===box)close();});
  document.addEventListener('keydown',e=>{
    if(box.hidden)return;
    if(e.key==='Escape')close();
    if(e.key==='Tab') {const items=[box.querySelector('button'),box.querySelector('a')];e.preventDefault();items[document.activeElement===items[0]?1:0].focus();}
  });
  document.querySelectorAll('.art a').forEach(a=>a.addEventListener('click',e=>{
    if(e.ctrlKey||e.metaKey||e.shiftKey)return;
    e.preventDefault();priorFocus=a;box.querySelector('img').src=a.href;box.querySelector('a').href=a.href;
    box.hidden=false;document.body.style.overflow='hidden';box.querySelector('button').focus();
  }));
})();
