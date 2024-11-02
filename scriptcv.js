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
        if (window.innerWidth >= 770) {
            sidebar.style.width = "400px"
        }

        function setActive(element) {
            document.querySelectorAll('.sidebar ul li a').forEach((link) => {
                link.classList.remove('activea');
            });
    
            element.classList.add('activea');
        }
        

        fleche.addEventListener("click", function(event) {

            event.preventDefault();
            function hideSidebarElements() {
                fleche.style.transform = "rotate(90deg)";
                sidebarmobile1.style.display = "none";
                telechargercv.style.display = "none";
                sidebar.style.height = "80px";
            }
    
            function showSidebarElements() {
                fleche.style.transform = "rotate(-90deg)";
                sidebarmobile1.style.display = "block";
                telechargercv.style.display = "block";
                sidebar.style.height = "550px";
            }

            var sidebar1 = document.querySelector(".sidebar span");
            var sidebar2 = document.querySelectorAll(".sidebar ul span");
            var sidebar3 = document.querySelector(".telecharger-cv a span");
            var telechargercv = document.querySelector(".telecharger-cv");

        if (window.innerWidth >= 770) {
            if (sidebar1.style.display === "none") {
               sidebar1.style.display = "inline";
               sidebar3.style.display = "inline";

               for(let i = 0;i < sidebar2.length; i++){
               sidebar2[i].style.display = "inline";
               }
               fleche.style.transform = "rotate(180deg)";
               sidebar.style.width = "400px"
               telechargercv.style.width = "110px"
                } else {
                sidebar1.style.display = "none";
                sidebar3.style.display = "none";
                for(let i = 0;i < sidebar2.length; i++){
                    sidebar2[i].style.display = "none";
                    }
                fleche.style.transform = "rotate(0deg)";
                sidebar.style.width = "100px"
                telechargercv.style.width = "15px"
                }
                } else {
                    var sidebarmobile1 = document.querySelector(".sidebar ul");
                        if (sidebarmobile1.style.display === "block" && telechargercv.style.display === "block") {
                            hideSidebarElements();
                        } else {
                            showSidebarElements();
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