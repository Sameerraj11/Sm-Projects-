// ///
var typed = new Typed(".typing", {
    strings:["Web Designer","web Developer","Graphic Designer","App Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// //////
const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalNavlist = navlist.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavlist; i++)
      {
        const a = navlist[i].querySelector("a");
        a.addEventListener("click",function()
        {
          for(i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
          }

         for(let j=0; j<totalNavlist; j++){
          if(navlist[j].querySelector("a").classList.contains("active"))
          {
           allSection[j].classList.add("back-section");
          }
           navlist[j].querySelector("a").classList.remove("active");
         }   
         this.classList.add("active")
         showSection(this);
         if(window.innerWidth < 1200){
          asideSectionToggleBtn();
         }
        })
      }
function showSection(element){
  for(i=0; i<totalSection; i++){
    allSection[i].classList.remove("active");
  }
  const target= element.getAttribute("href").split("#") [1];
  document.querySelector("#" + target).classList.add("active")
}
const nanTogglerBtn = document.querySelector(".nav-toggle"),
      aside = document.querySelector(".aside");
      nanTogglerBtn.addEventListener("click", () => {
        asideSectionToggleBtn();
      })
function asideSectionToggleBtn ()
{
  aside.classList.toggle("open");
  nanTogglerBtn.classList.toggle("open");
  for(i=0; i<totalSection; i++){
    allSection[i].classList.toggle("open");
  }
}




