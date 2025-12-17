from odoo import models, fields

class TodoTask(models.Model):
    _name = "todo.task"
    _description = "To-do Task"

    name = fields.Char(required=True)
    is_done = fields.Boolean(default=False)
