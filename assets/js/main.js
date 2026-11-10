const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')})}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const n=form.querySelector('.notice');n.style.display='block';n.textContent='Thanks! This demo form works on the front end. Connect Formspree, EmailJS or your own backend to receive submissions.';form.reset()}));
