/* jshint esversion: 9 */
/* jshint strict: global */
/* jshint devel: true */

'use strict';


class Notepad {
    static Priority = {
        LOW: 0,
        NORMAL: 1,
        HIGH: 2,
    };

    constructor(notes=[]) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

    findNoteById(id) {
        for (const note of this._notes) {
            if (note.id == id) {
                return note;
            }
        }
        return;
    }

    saveNote(note) {
        this._notes.push(note);
        return this._notes[-1];
    }

    deleteNote(id) {
        for (let i = 0; i < this._notes.length; i += 1) {
            if (this._notes[i].id === id) {
                this._notes.splice(i, 1);
            }
        }
    }
    updateNoteContent(id, updatedContent) {
        // const note = this.findNoteById(id);
        // for (let key of Object.keys(updatedContent)) {
        //     note[key] = updatedContent[key];
        // }


        // esversion 6
        // note = Object.assign(note, updatedContent);

        // esversion 9
        for (let i = 0; i < this.notes.length; i += 1) {
            if (this._notes[i].id == id) {
                this._notes[i] = { ...this._notes[i], ...updatedContent };
                return this._notes[i];
            }
        }
        return;

        // return note;
    }

    updateNotePriority(id, priority) {
        let note = this.findNoteById(id);
        note.priority = priority;
        return note;
    }

    filterNotesByQuery(query) {
        const queryLowercase = query.toLowerCase();

        // return this.notes.filter(note => note.title.toLowerCase().includes(queryLowercase) || note.body.toLowerCase().includes(queryLowercase));

        const filteredNotes = [];

        for (const note of this._notes) {
            if (note.title.toLowerCase().includes(queryLowercase) || note.body.toLowerCase().includes(queryLowercase)) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    }

    filterNotesByPriority(priority) {
        // return this.notes.filter(note => note.priority === priority);

        const filteredNotes = [];
        for (const note of this._notes) {
            if (note.priority == priority) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    }
}



const initialNotes = [
    {
        id: 'id-1',
        title: 'JavaScript essentials',
        body:
            'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
        priority: Notepad.Priority.HIGH,
    },
    {
        id: 'id-2',
        title: 'Refresh HTML and CSS',
        body:
            'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
        priority: Notepad.Priority.NORMAL,
    },
];

const notepad = new Notepad(initialNotes);

/*
  Смотрю что у меня в заметках после инициализации
*/
console.log('Все текущие заметки: ',);

console.table(notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
        'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
        "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ',);

console.table(notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);


console.log('Заметки после обновления приоритета для id-4: ', );
console.table(notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', );
console.table(notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */

console.log('Отфильтровали заметки по ключевому слову "html": ',);
console.table(
    notepad.filterNotesByQuery('html')
);

/*
 * Решил отфильтровать заметки по слову javascript
 */

console.log('Отфильтровали заметки по ключевому слову "javascript": ',);
console.table(
    notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */

console.log('Отфильтровали заметки по нормальному приоритету: ',);
console.table(
    notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});

console.log('Заметки после обновления контента заметки с id-3: ',);
console.table(
    notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');

console.log('Заметки после удаления с id -2: ',);
console.table( notepad.notes);