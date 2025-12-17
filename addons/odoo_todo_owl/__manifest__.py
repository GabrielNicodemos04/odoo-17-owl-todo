{
    "name": "To-do Interno OWL",
    "version": "17.0.1.0.0",
    "depends": ["web"],
    "application": True,
    "data": ["data/menu.xml"],
    "assets": {
        "web.assets_backend": [            
            "odoo_todo_owl/static/src/css/**/*.css",
            "odoo_todo_owl/static/src/xml/**/*.xml",
            "odoo_todo_owl/static/src/js/**/*.js",
            "odoo_todo_owl/static/src/store/**/*.js",
        ],
    },
    "license": "LGPL-3",
}
