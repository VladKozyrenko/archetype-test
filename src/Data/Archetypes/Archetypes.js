export const archetypes = {
    ideologist: { score: 18, name: 'Ідеолог' },
    visionary: { score: 18, name: 'Візіонер' },
    innovator: { score: 18, name: 'Новатор' },
    leader: { score: 18, name: 'Лідер' },
    partner: { score: 18, name: 'Партнер' },
    researcher: { score: 18, name: 'Дослідник' },
    communicator: { score: 18, name: 'Комунікатор' },
    expert: { score: 18, name: 'Експерт' },
    manager: { score: 18, name: 'Керівник' },
    creator: { score: 18, name: 'Творець' },
    mentor: { score: 18, name: 'Ментор' },
    speaker: { score: 18, name: 'Спікер' }
};
export var arrayArchetypesNames = [];
for (var prop in archetypes) {
    arrayArchetypesNames.push(`${archetypes[prop].name} `)
}