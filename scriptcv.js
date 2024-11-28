document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll(".sidebar ul li a");
        const sections = document.querySelectorAll(".content section");

        links.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();

                links.forEach(l => l.classList.remove("activea"));
            
                this.classList.add("activea");

                const target = this.getAttribute("data-target");

                sections.forEach(section => {
                    if (section.id === target) {
                        section.classList.add("activecv");
                    } else {
                        section.classList.remove("activecv");
                    }
                });
            });
           

        });

        if (sections.length > 0) {
            sections[0].classList.add("activecv");
        }
        var fleche = document.querySelector(".flechecv");
        var sidebar = document.querySelector(".sidebar");

        function init(){
            if (window.innerWidth > 770) {
                fleche.style.transform = 'rotate(180deg)';
                sidebar.style.width = "400px"
            } else {
                sidebar.style.width = "100%"
                fleche.style.transform = 'rotate(90deg)';
                sidebar.style.height = "80px"
            }
        }
        init();
        window.addEventListener('resize', function() {
           init();      
         });

       

        function setActive(element) {
            document.querySelectorAll('.sidebar ul li a').forEach((link) => {
                link.classList.remove('activea');
            });
    
            element.classList.add('activea');
        }
        

        fleche.addEventListener("click", function(event) {

            event.preventDefault();
            function hideSidebarElements() {
                sidebar.style.height = "80px";
            }
    
            function showSidebarElements() {
                sidebar.style.height = "550px";
            }

            var sidebar1 = document.querySelector(".sidebar h2");
            var sidebar2 = document.querySelectorAll(".sidebar ul li a");
            var telechargercv = document.querySelector(".telecharger-cv");

        if (window.innerWidth > 770) {
            if (sidebar.style.width != "400px") {
                sidebar1.style.width = '200px';
               for(let i = 0;i < sidebar2.length; i++){
               sidebar2[i].style.width = '100%'
               }
               fleche.style.transform = "rotate(180deg)";
               sidebar.style.width = "400px"
               telechargercv.style.width = "110px"
                } else {
                sidebar1.style.width = '20px';
                for(let i = 0;i < sidebar2.length; i++){
                    sidebar2[i].style.width = '50%'
                }
                fleche.style.transform = "rotate(0deg)";
                sidebar.style.width = "100px"
                telechargercv.style.width = "15px"
                }
                } else {
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
                        hideSidebarElements();
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
                        if (!sidebar.contains(event.target) && !fleche.contains(event.target)) {
                            hideSidebarElements();
                        }
                    });
        });
    });