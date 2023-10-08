import tkinter as tk
from tkinter import messagebox

class TodoListManager:
    def __init__(self):
        self.tasks = []

        self.window = tk.Tk()
        self.window.title("To-Do List Manager")

        self.frame_tasks = tk.Frame(self.window)
        self.frame_tasks.pack(pady=10)

        self.list_tasks = tk.Listbox(self.frame_tasks, width=50)
        self.list_tasks.pack(side=tk.LEFT, fill=tk.BOTH)

        self.scroll_tasks = tk.Scrollbar(self.frame_tasks)
        self.scroll_tasks.pack(side=tk.RIGHT, fill=tk.BOTH)

        self.list_tasks.config(yscrollcommand=self.scroll_tasks.set)
        self.scroll_tasks.config(command=self.list_tasks.yview)

        self.frame_input = tk.Frame(self.window)
        self.frame_input.pack(pady=10)

        self.entry_task = tk.Entry(self.frame_input, width=50)
        self.entry_task.pack(side=tk.LEFT)

        self.btn_add = tk.Button(self.frame_input, text="Add Task", command=self.add_task)
        self.btn_add.pack(side=tk.LEFT, padx=10)

        self.btn_remove = tk.Button(self.window, text="Remove Task", command=self.remove_task)
        self.btn_remove.pack(pady=10)

    def add_task(self):
        task = self.entry_task.get()
        if task:
            self.tasks.append(task)
            self.list_tasks.insert(tk.END, task)
            self.entry_task.delete(0, tk.END)
            messagebox.showinfo("Success", "Task added successfully.")
        else:
            messagebox.showwarning("Warning", "Please enter a task.")

    def remove_task(self):
        try:
            selected_index = self.list_tasks.curselection()
            if selected_index:
                index = int(selected_index[0])
                removed_task = self.tasks.pop(index)
                self.list_tasks.delete(selected_index)
                messagebox.showinfo("Success", f"Task '{removed_task}' removed successfully.")
            else:
                messagebox.showwarning("Warning", "No task selected.")
        except IndexError:
            messagebox.showwarning("Warning", "Invalid selection.")

    def run(self):
        self.window.mainloop()

if __name__ == "__main__":
    todo_list = TodoListManager()
    todo_list.run()
