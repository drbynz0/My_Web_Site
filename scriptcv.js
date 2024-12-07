document.addEventListener("DOMContentLoaded", function() {
        const links1 = document.querySelectorAll(".sidebar ul li");
        const links = document.querySelectorAll(".sidebar ul li a");
        const linksIcons = document.querySelectorAll('.sidebar ul li i');
        const sections = document.querySelectorAll(".content section");
        var fleche = document.querySelector(".flechecv");
        var sidebar = document.querySelector(".sidebar");
        const titrecv = document.querySelector("#titre-cv span");
        var telechargercv = document.querySelector(".telecharger-cv");

        function init(){
            if (window.innerWidth > 770) {
                for (let i=0; i<links1.length; i++){
                    linksIcons[i].classList.add('no-hover');
                    }
                fleche.style.transform = 'rotate(180deg)';
                sidebar.style.width = "400px"
            } else {
                for (let i=0; i<links1.length; i++){
                    linksIcons[i].classList.add('no-hover');
                    }
                sidebar.style.width = "100%"
                fleche.style.transform = 'rotate(90deg)';
                sidebar.style.height = "80px"
            }
        }
        init();
        
        linksIcons.forEach(linkIcon => {
            linkIcon.addEventListener("click", function(event){
                event.preventDefault();

                if (window.innerWidth > 770){
                    if (sidebar.style.width < '400px') {
                        linksIcons.forEach(li => li.classList.remove('activei'));
                        this.classList.add('activei');
                    }
                }
            });
        });

        links.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();

                    if (sidebar.style.width >= '400px' || sidebar.style.width === '100%'){
                    links.forEach(l => l.classList.remove("activea"));
                
                    this.classList.add("activea");
                    }

                const target = this.getAttribute("data-target");

                sections.forEach(section => {
                    if (section.id === target) {
                        section.classList.add("activecv");
                    } else {
                        section.classList.remove("activecv");
                    }
                });
                if (window.innerWidth <= 770) {
                    sidebar.style.height = "80px";
                    fleche.style.transform = "rotate(90deg)";
                }
            });
           

        });

        if (sections.length > 0) {
            sections[0].classList.add("activecv");
        }


        
        window.addEventListener('resize', function() {
           init();      
         });

       

        function setActive(element) {
            document.querySelectorAll('.sidebar ul li a').forEach((link) => {
                link.classList.remove('activea');
            });
    
            element.classList.add('activea');
        }
        function hideSidebarElements() {
            sidebar.style.height = "80px";
        }

        function showSidebarElements() {
            sidebar.style.height = "550px";
        }

        fleche.addEventListener("click", function(event) {

            event.preventDefault();
                
            if (window.innerWidth > 770) {
                if (sidebar.style.width < "400px") {
                fleche.style.transform = "rotate(180deg)";
                titrecv.style.display = "block";
                sidebar.style.width = "400px"
                telechargercv.style.width = "110px"
                for (let i=0; i<links1.length; i++){
                    links1[i].classList.remove('no-hover');
                    linksIcons[i].classList.add('no-hover');
                    linksIcons[i].classList.remove('activei');
                    }
                } else {
                    fleche.style.transform = "rotate(0deg)";
                    titrecv.style.display = "none";
                    sidebar.style.width = "100px"
                    telechargercv.style.width = "15px";
                    for (let i=0; i<links1.length; i++){
                        links1[i].classList.add('no-hover');
                        linksIcons[i].classList.remove('no-hover');
                        links[i].classList.remove('activea');
                        }
                    }
            } else {
                for (let i=0; i<links1.length; i++){
                    linksIcons[i].classList.add('no-hover');
                    }
                if (sidebar.style.height === '80px') {
                    showSidebarElements();
                    fleche.style.transform = "rotate(-90deg)";
                } else {
                    hideSidebarElements();
                    fleche.style.transform = "rotate(90deg)";
                }
            }

            links.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
                    var target = this.getAttribute("data-target");
                    document.querySelectorAll(".content section").forEach(section => {
                        if (section.id === target) {
                            section.classList.add("active");
                        } else {
                            section.classList.remove("active");
                        }
                    });
                });
            });

            document.addEventListener("click", function(event) {
                if (window.innerWidth <= 770){
                    if (!sidebar.contains(event.target) && !fleche.contains(event.target)) {
                        hideSidebarElements();
                    }
                }
            });
        });
    });