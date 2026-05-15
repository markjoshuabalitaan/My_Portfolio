const observer = new IntersectionObserver((entries)=>{
    
  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

});

document.querySelectorAll(".fade-up").forEach((el)=>{
  observer.observe(el);
});