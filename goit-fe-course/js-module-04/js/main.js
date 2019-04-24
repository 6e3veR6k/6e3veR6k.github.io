/* jshint esversion: 6 */
/* jshint strict: global */
/* jshint devel: true */

'use strict';

// priority
const Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};


const notepad = {
    notes: [],
    getNotes() {
        return this.notes;
    },
    findNoteById(id) {
        for (const note of this.notes) {
            if (note.id == id) {
                return note;
            }
        }
        return;
    },
    saveNote(note) {
        this.notes.push(note);
        return this.notes[-1];
    },
    deleteNote(id) {
        for (let i = 0; i < this.notes.length; i += 1) {
            if (this.notes[i].id === id) {
                this.notes.splice(i, 1);
            }
        }
    },
    updateNoteContent(id, updatedContent) {
        let note = this.findNoteById(id);
        // for (let key of Object.keys(updatedContent)) {
        //     note[key] = updatedContent[key];
        // }
        // note = Object.assign(note, updatedContent);
        note = { ...note, ..}

        return note;
    },
    updateNotePriority(id, priority) {
        let note = this.findNoteById(id);
        note.priority = priority;
        return note;
    },
    filterNotesByQuery(query) {
        const queryLowercase = query.toLowerCase();

        // return this.notes.filter(note => note.title.toLowerCase().includes(queryLowercase) || note.body.toLowerCase().includes(queryLowercase));

        const filteredNotes = [];

        for (const note of this.notes) {
            if (note.title.toLowerCase().includes(queryLowercase) || note.body.toLowerCase().includes(queryLowercase)) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    },
    filterNotesByPriority(priority) {
        // return this.notes.filter(note => note.priority === priority);

        const filteredNotes = [];
        for (const note of this.notes) {
            if (note.priority == priority) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    },
};




/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
});

notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
        'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
        "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
});

console.log('Все текущие заметки: ');
console.table(notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ');
console.table(notepad.getNotes());

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ');
console.table(notepad.getNotes());

/*
 * Решил отфильтровать заметки по слову html
 */
console.log('Отфильтровали заметки по ключевому слову "html": ');
console.table(notepad.filterNotesByQuery('html'));

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log('Отфильтровали заметки по ключевому слову "javascript": ');
console.table(notepad.filterNotesByQuery('javascript'));

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log('Отфильтровали заметки по нормальному приоритету: ');
console.table(notepad.filterNotesByPriority(Priority.NORMAL));

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});
console.log('Заметки после обновления контента заметки с id-3: ');
console.table(notepad.getNotes());

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.table('Заметки после удаления с id -2: ', notepad.getNotes());


