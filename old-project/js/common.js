$(document).ready(function(){
    // DataTables initialization
    if ($(window).width() < 500){
        $('#datatable-exp').DataTable({
            "columnDefs": [
                {
                    "targets": [ 2 ],
                    "visible": false,
                    "searchable": false
                }
            ],
            "lengthMenu": [ 10, 20, 50 ],
            "language": getLanguageSettings()
        });
    } else {
        $('#datatable-exp').DataTable({
            responsive: true,
            "lengthMenu": [ 10, 20, 50 ],
            "language": getLanguageSettings()
        });
    }

    // Skillbar animation
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });

    // Isotope filtering
    (function() {
        // quick search regex
        var qsRegex;
        var buttonFilter;

        // init Isotope
        var $container = $('.notas').isotope({
            itemSelector: '.skillbar',
            layoutMode: 'fitRows',
            filter: function() {
                var $this = $(this);
                var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
                var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
                return searchResult && buttonResult;
            }
        });

        $('#filters').on('click', 'button', function() {
            buttonFilter = $(this).attr('data-filter');
            $container.isotope();
        });

        // use value of search field to filter
        var $quicksearch = $('#quicksearch').keyup(debounce(function() {
            qsRegex = new RegExp($quicksearch.val(), 'gi');
            $container.isotope();
        }));

        // change is-checked class on buttons
        $('.button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'btn', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    })();

    // Navigation smooth scrolling
    $("#navbar li a").click(function(){
        $("#navbar").removeClass("in");
        var targetSection = "";
        switch ($(this).text()){
            case "About me":
            case "Sobre Mim":
                targetSection = "#about";
                break;
            case "Projects":
            case "Projetos":
                targetSection = "#certf";
                break;
            case "Technologies where I work":
            case "Tecnologias que domino":
                targetSection = "#ling";
                break;
            case "My school grades":
            case "As Minhas Notas":
                targetSection = "#notas";
                break;
            case "FAQ":
                targetSection = "#faq";
                break;
            default:
                return false;
        }
        
        $('html, body').animate({
            scrollTop: $(targetSection).offset().top - 50
        }, 1000);
        
        return false;
    });
});

// Detect language based on current page
function getLanguageSettings() {
    // Check if we're on the English page
    var isEnglish = window.location.pathname.indexOf('en.html') > -1;
    
    if (isEnglish) {
        return {
            "lengthMenu": "Show _MENU_ records per page",
            "zeroRecords": "No records found",
            "search": "Search:",
            "info": "Displaying _START_ out of _END_ of _TOTAL_ records",
            "infoEmpty": "No records",
            "infoFiltered": "(Filtered _MAX_ records in total)"
        };
    } else {
        return {
            "lengthMenu": "Mostrar _MENU_ registos por página",
            "zeroRecords": "Nenhum registo encontrado",
            "search": "Procurar:",
            "info": "A mostrar de _START_ até _END_ de _TOTAL_ registos",
            "infoEmpty": "Não existe registos",
            "infoFiltered": "(Filtrado de _MAX_ registos em total)"
        };
    }
}

// Debounce function
function debounce(fn, threshold) {
    var timeout;
    return function debounced() {
        if (timeout) {
            clearTimeout(timeout);
        }
        function delayed() {
            fn();
            timeout = null;
        }
        setTimeout(delayed, threshold || 100);
    };
} 