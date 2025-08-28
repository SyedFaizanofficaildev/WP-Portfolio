    // Mobile menu toggle
    const menuBtn=document.getElementById('menuBtn');
    const navLinks=document.getElementById('navLinks');
    menuBtn.addEventListener('click',()=>{navLinks.style.display=navLinks.style.display==='flex'?'': 'flex';});

    // Reveal on scroll
    const io=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}});
    },{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // Skill bars
    const bo=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting){
        const p=e.target.querySelector('.progress');
        if(p){p.style.width=p.dataset.width+'%';}
        bo.unobserve(e.target);
      }});
    },{threshold:.3});
    document.querySelectorAll('.skill').forEach(el=>bo.observe(el));

    // Contact form (front-end only)
    document.getElementById('contactForm').addEventListener('submit',function(ev){
      ev.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const msg=document.getElementById('message').value.trim();
      if(!name||!email||!msg){alert('Please fill all fields correctly.');return;}
      alert('Thanks! I\'ll get back to you shortly.');
      this.reset();
    });

    // Year
    document.getElementById('year').textContent=new Date().getFullYear();