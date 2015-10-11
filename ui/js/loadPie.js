$( document ).ready(function() {

    var pie = new d3pie("pieChart", {
        "header": {
            "title": {
                "text": "Catégories",
                "fontSize": 34,
                "font": "courier"
            },
            "subtitle": {
                "text": "Quelles sont les plus populaires ? *",
                "color": "#999999",
                "fontSize": 10,
                "font": "courier"
            },
            "location": "pie-center",
            "titleSubtitlePadding": 10
        },
        "footer": {
            "text": "* Déterminé en fonction du nombre de sous-catégories",
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasHeight": 620,
            "canvasWidth": 782,
            "pieInnerRadius": "80%",
            "pieOuterRadius": "70%"
        },
        "data": {
            "sortOrder": "label-asc",
            "content": [
                {
                    "label": "Bureautique",
                    "value": 9,
                    "color": "#2383c1"
                },
                {
                    "label": "Graphisme",
                    "value": 7,
                    "color": "#64a61f"
                },
                {
                    "label": "Internet",
                    "value": 10,
                    "color": "#7b6788"
                },
                {
                    "label": "Loisirs",
                    "value": 2,
                    "color": "#a05c56"
                },
                {
                    "label": "Multimédia",
                    "value": 7,
                    "color": "#961919"
                },
                {
                    "label": "Progiciels",
                    "value": 3,
                    "color": "#d8d239"
                },
                {
                    "label": "Publication",
                    "value": 5,
                    "color": "#e98125"
                },
                {
                    "label": "Serveurs",
                    "value": 5,
                    "color": "#d0743c"
                },
                {
                    "label": "Système d'information géographique",
                    "value": 1,
                    "color": "#6ada6a"
                },
                {
                    "label": "Traduction de textes",
                    "value": 1,
                    "color": "#0b6197"
                },
                {
                    "label": "Mathématiques",
                    "value": 2,
                    "color": "#7c9058"
                },
                {
                    "label": "Utilitaires",
                    "value": 11,
                    "color": "#207f32"
                }
            ]
        },
        "labels": {
            "outer": {
                "format": "label-percentage1",
                "pieDistance": 20
            },
            "inner": {
                "format": "none"
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#999999",
                "fontSize": 11,
                "decimalPlaces": 0
            },
            "value": {
                "color": "#cccc43",
                "fontSize": 11
            },
            "lines": {
                "enabled": true,
                "color": "#777777"
            },
            "truncation": {
                "enabled": true
            }
        },
        "tooltips": {
            "enabled": true,
            "type": "placeholder",
            "string": "{label}: {value}, {percentage}%"
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "colors": {
                "segmentStroke": "#000000"
            }
        }
    });

});
