import React, { useState } from 'react';

const archetypes = {
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
const questions = [
  {
    question: 'Я вважаю, що люди, з якими я спілкуюся, заслуговують на довіру',
    answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
    archetype: archetypes.ideologist,
    score: archetypes.ideologist.score
  },
  {
    question: 'Я не люблю бути на самоті',
    answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
    archetype: archetypes.partner,
    score: archetypes.partner.score
  },
  // {
  //   question: 'Змагання заводять і розбурхують мене',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Я вірю, що люди насправді не хочуть робити один одному боляче',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.ideologist,
  //   score: archetypes.ideologist.score
  // },
  // {
  //   question: 'Я знаю, що важливо не чекати занадто багато',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.partner,
  //   score: archetypes.partner.score
  // },
  // {
  //   question: 'Я готовий ризикувати собою, щоб захищати свої принципи',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Навколо мене є люди, на яких можна покластися, що вони подбають про мене',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.ideologist,
  //   score: archetypes.ideologist.score
  // },
  // {
  //   question: 'Дружба - це найважливіше у житті',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.partner,
  //   score: archetypes.partner.score
  // },
  // {
  //   question: 'У більшості випадків я впораюся зі страхом і роблю те, що потрібно зробити',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Я почуваюся в безпеці',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.ideologist,
  //   score: archetypes.ideologist.score
  // },
  // {
  //   question: 'Важлива не перемога, а участь',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.partner,
  //   score: archetypes.partner.score
  // },
  // {
  //   question: 'Я завжди зможу протистояти кривдникам',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Я знаю, що мої потреби будуть задоволені, я отримаю, що хочу',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.ideologist,
  //   score: archetypes.ideologist.score
  // },
  // {
  //   question: 'Мене дратують хвальки та випендрежники',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.partner,
  //   score: archetypes.partner.score
  // },
  // {
  //   question: 'Мене влаштовує, що я наполегливий і агресивний',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Світ – це безпечне місце',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.ideologist,
  //   score: archetypes.ideologist.score
  // },
  // {
  //   question: 'Я не люблю виділятися з натовпу',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.partner,
  //   score: archetypes.partner.score
  // },
  // {
  //   question: 'У змаганні я виявляю всі свої найкращі якості',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.leader,
  //   score: archetypes.leader.score
  // },
  // {
  //   question: 'Я знаходжу сенс, повноту життя в тому, що віддаю/допомагаю іншим',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Я завжди шукаю більш комфортні умови',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Я, в принципі, люблю всіх людей',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Мені здається, що легше робити щось для інших, ніж для себе',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Я завжди шукаю способи зробити себе кращою',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Я знаходжу сенс життя у відносинах',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Мені подобається дбати про інших людей',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Я почуваюся тривожно',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Мені подобається допомагати людям зустрічатися та знайомитися один з одним',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Мені важко говорити НІ',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Я тримаюся до кінця, щоб отримати щось краще',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Близькі, щирі стосунки – найголовніше для мене',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Інтереси інших важливіші за мої власні інтереси',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Я весь час знаходжуся у пошуках нових можливостей',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Я - романтик',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Доброта для мене найвища цінність',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.mentor,
  //   score: archetypes.mentor.score
  // },
  // {
  //   question: 'Для мене дуже важливо зберегти особисту свободу',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.researcher,
  //   score: archetypes.researcher.score
  // },
  // {
  //   question: 'Я почуваюся більш повноцінним, наповненим, коли я закоханий',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.communicator,
  //   score: archetypes.communicator.score
  // },
  // {
  //   question: 'Я завжди знайду вихід із неприємної ситуації',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'Я сам творець свого життя',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: 'У мене добре виходить підбирати завдання, які відповідають здібностям людей',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'Моє життя швидко змінюється',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'У мене набагато більше прекрасних ідей, ніж часу на їхнє виконання',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: 'У мене є лідерські якості',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'У моєму житті є якась порожнеча',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'Часто успіх та великі досягнення мені даються дуже легко',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: 'Я люблю, чтобы все было под контролем',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'Правила існують для того, щоб їх порушувати',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'Натхнення легко приходить до мене',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: 'Мені подобається брати на себе відповідальність за будь-що',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'Недавній досвід змусив мене переосмислити, хто я є',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'Люди вважають мене творчою людиною',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: 'Я часто беру на себе лідерство в кризових ситуаціях, коли речі йдуть з-під контролю',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'Я засмучуюсь через невдачі та програші',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.innovator,
  //   score: archetypes.innovator.score
  // },
  // {
  //   question: 'У мене гарна уява',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.creator,
  //   score: archetypes.creator.score
  // },
  // {
  //   question: `Мій обов'язок - виконувати взяті на себе зобов'язання`,
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.manager,
  //   score: archetypes.manager.score
  // },
  // {
  //   question: 'Зміна моїх думок призводить до змін у моєму житті',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: 'Я вірю, що існує багато позитивних способів дивитися на ту саму річ/питання',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Я люблю жартувати та смішити людей',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // },
  // {
  //   question: `Я вірю, що все і все у цьому світі взаємопов'язані`,
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: `Я прагну до об'єктивності`,
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Я підходжу з гумором до людей, які надто серйозні',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // },
  // {
  //   question: 'Я люблю перетворювати/трансформувати ситуації',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: 'Мене часто відвідують глибокі думки',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Мене вважають прикольним, веселим',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // },
  // {
  //   question: 'Часто моя присутність - каталізатор змін навколо',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: 'Я намагаюся знайти істину, що ховається за ілюзіями',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Я посміююся над абсурдністю нашого життя',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // },
  // {
  //   question: 'Моя ефективність залежить від стану моєї душі',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: 'Люди чекають від мене порад',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Я волію жити сьогоднішнім днем',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // },
  // {
  //   question: 'Процес мого власного умиротворення допомагає мені допомогти іншим',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.visionary,
  //   score: archetypes.visionary.score
  // },
  // {
  //   question: 'Я люблю виклики, складні завдання, які змушують мене думати',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.expert,
  //   score: archetypes.expert.score
  // },
  // {
  //   question: 'Немає нічого кращого, ніж посміятися від душі',
  //   answers: ['Повністю не згоден', 'Не згоден', 'Не впевнений', 'Згоден', 'Повністю згоден'],
  //   archetype: archetypes.speaker,
  //   score: archetypes.speaker.score
  // }
];

const archetypesResult = [
  { result: 'Ідеолог (Невинний)', character: 'Корисний, благотворний, чистий, чесний, всепрощаючий, гідний довіри, щасливий, оптимістичний, любитель простих насолод.', wish: 'відчути рай, бути щасливим, оновлення', aim: 'бути щасливим', fear: 'зробити щось погано чи неправильно, бути покараним', strategy: 'робити правильно', weak: 'нудні через наївну невинність', talent: 'віра и оптимізм' },
  { result: 'Візіонер (Чарівник)', character: 'Візіонер, шаман, цілитель, інтуїт, каталізатор змін, божественний, харизматичний, привабливий, творець чарівних моментів та ритуалів', wish: 'знати, як працює світ чи Всесвіт, робити мрії та сни реальністю, створювати «чарівні моменти»', aim: 'реалізувати мрії', fear: 'ненавмисні негативні наслідки', strategy: 'створити бачення та жити їм', weak: 'стати маніпулятором', talent: 'знаходити виграшні рішення для всіх' },
  { result: 'Новатор (Бунтар)', character: 'Бунтівний, шокуючий, пробивний, руйнівний, сильний, впливовий, революційний, визвольний', wish: 'революція, руйнація всього, що не працює, помста', aim: 'уничтожить неработающее, неэффективное, устаревшее', fear: 'виявити безсилля, безрезультатність, тривіальність', strategy: 'підривати, руйнувати, шокувати', weak: 'перехід на «темний бік», злочин', talent: 'безчинство, радикальна свобода' },
  { result: 'Лідер (Герой)', character: 'Воїн, переможець, ідеаліст, гордий, сміливий, відважний, агресивний, принциповий, прагне покращити світ, заперечує погане.', wish: 'довести власну цінність завдяки відвагі та виходу зі складних ситуацій, досягти майстерності заради покращення миру', aim: 'довести власну компетентність, покращивши світ; врятувати тих, хто в біді', fear: 'виявити слабкість, вразливість, боягузливість', strategy: 'стати максимально сильним та компетентним', weak: 'зарозумілість, невміння заспокоїтися, зайва принциповість', talent: 'компетентність, сила волі та хоробрість' },
  { result: 'Партнер (Славний малий)', character: 'Непомітний, прямолінійний, що прагне бути як усі, надійний, практичний, приземлений, передбачуваний, що охороняє статус-кво, традиційний', wish: `відчувати зв'язок з іншими, бути прийнятим`, aim: 'бути частиною суспільства', fear: 'бути не прийнятим, надто пафосним, уславитися «білою вороною», стати вигнанцем', strategy: 'розвивати звичайні чесноти, бути «своїм»', weak: 'втрата себе в бажанні злитися з іншими', talent: 'емпатія, відсутність удавання, почуття реального' },
  { result: 'Дослідник (Шукач)', character: 'Досліджуючий, ризикований, небезпечний, незалежний, що цінує свободу.', wish: 'свобода, відкрити та реалізувати себе, досліджуючи світ, жити повним життям', aim: 'автентичне, повноцінне життя', fear: 'позбутися свободи, конформізм, внутрішня порожнеча', strategy: 'подорож, пошук нових вражень, втеча від нудьги', weak: 'безцільне путання, ізгой суспільства', talent: 'автономність, амбіції, цілісність' },
  { result: 'Комунікатор (Коханець)', character: 'Пристрасний, сексуальний, спокусливий, чутливий, шукає насолоди, живе емоціями, перебуває у пошуках справжнього кохання', wish: 'оточити себе тим, що любиш; інтимність; чуттєве задоволення', aim: 'бути у відносинах з коханими людьми, роботою та речами', fear: 'бути небажаною, самотність', strategy: 'ставати привабливіше фізично та емоційно', weak: 'бажання «задовольнити» всіх, ризик втратити себе', talent: 'пристрасть, подяка, лояльність' },
  { result: 'Експерт (Мудрець)', character: 'Мислитель, філософ, експерт, радник, вчитель, впевнений у собі, задумливий, незалежний, що має високий рівень самоконтролю.', wish: 'відкрити Істину, використовувати знання та інтелект, щоб зрозуміти світ, бути експертом', aim: 'зрозуміти світ за допомогою аналізу та інтелекту', fear: 'бути обдуреним, виявити невігластво', strategy: 'пошук знань, саморефлексія, пізнання через розумовий процес', weak: 'може вічно вивчати деталі та не приступати до дій', talent: 'мудрість, інтелект' },
  { result: 'Керівник (Правитель)', character: 'Керівник, організатор, ефективний, кваліфікований, продуктивний, впевнений, відповідальний', wish: `контролювати, створити успішну успішну сім'ю, компанію`, aim: 'створити процвітаюче, успішне суспільство', fear: 'поринути в хаос, бути скинутим', strategy: 'влада та управління', weak: 'авторитарність, невміння делегувати', talent: 'відповідальність, лідерство' },
  { result: 'Творець (Творець)', character: 'Фантазер, експериментатор, артистичний, амбітний, готовий ризикувати', wish: 'створити щось цінне та довговічне, унікальне', aim: 'втілити у реальність своє бачення', fear: 'проявити посередність, пересічність, бути «середнім», не мати бачення', strategy: 'розвивати талант та навички', weak: 'перфекціонізм, погані рішення', talent: 'творчість та уява' },
  { result: 'Ментор (Батько)', character: 'Альтруїстичний, дбайливий, співчутливий, співпереживаючий, готовий допомогти, щедрий, благородний', wish: 'піклуватися про інших', aim: 'оберігати та допомагати всім', fear: 'проявити егоїзм, невдячність', strategy: 'альтруїзм, чуйність', weak: 'жертовність', talent: 'співчуття та щедрість, доброта' },
  { result: 'Спікер (Блазень)', character: 'Жартівник, клоун, фокусник, грайливий, веселий, приймає речі легко, створює веселощі/хаос, імпульсивний, спонтанний, живе одним моментом.', wish: 'жити одним днем ​​і повністю насолоджуватися життям', aim: 'добре провести час і зробити світ радіснішим', fear: 'нудьгувати чи бути нудним', strategy: 'гра, жарти, бути смішним, бути в центрі уваги', weak: 'легковажність, марна трата часу', talent: 'радість, почуття гумору' }
]

var arrayArchetypesNames = [];
var arrayArchetypesScore = [];
var maxScore;
var indexMax;

for (var prop in archetypes) {
  arrayArchetypesNames.push(`${archetypes[prop].name} `)
}

console.log(archetypes[0])
console.log(arrayArchetypesNames)
console.log(arrayArchetypesScore)

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const setScore = (type, num) => {
    return type.score += num;
  }

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answers[0]) {
      setScore(questions[currentQuestion].archetype, -2);
    } else if (answer === questions[currentQuestion].answers[1]) {
      setScore(questions[currentQuestion].archetype, -1);
    } else if (answer === questions[currentQuestion].answers[2]) {
      setScore(questions[currentQuestion].archetype, 0);
    } else if (answer === questions[currentQuestion].answers[3]) {
      setScore(questions[currentQuestion].archetype, 1);
    } else if (answer === questions[currentQuestion].answers[4]) {
      setScore(questions[currentQuestion].archetype, 2);
    }
    arrayArchetypesScore = []
    for (var prop in archetypes) {
      arrayArchetypesScore.push(archetypes[prop].score)
    }
    maxScore = Math.max(...arrayArchetypesScore)
    indexMax = arrayArchetypesScore.indexOf(maxScore)
    console.log(indexMax)
    console.log(maxScore)
    console.log(arrayArchetypesScore)
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      {currentQuestion < questions.length ? (
        <div className='x-container'>
          <h3>Питання №{questions.indexOf(questions[currentQuestion]) + 1}/72</h3>
          <p id='question-container'>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].answers.map((answer, index) => (
            <button id='answer-btn' key={index} onClick={() => handleAnswer(answer)}>
              {answer}
            </button>
          ))}
          <button id='cmbck' onClick={() => window.location.reload()}>Повернутись на головну сторінку</button>
        </div>
      ) : (
        <div className='z-container'>
          <div className='answer-div'>
            <h1 className='cursive'>Ти - {archetypesResult[indexMax].result}</h1>
            <h2 className='answer-h2'>{archetypesResult[indexMax].character}</h2>
            <ul className='wish'><span>Бажання:</span> {archetypesResult[indexMax].wish}</ul>
            <ul className='aim'><span>Ціль:</span> {archetypesResult[indexMax].aim}</ul>
            <ul className='fear'><span>Страх:</span> {archetypesResult[indexMax].fear}</ul>
            <ul><span>Стратегія:</span> {archetypesResult[indexMax].strategy}</ul>
            <ul><span>Слабкість:</span> {archetypesResult[indexMax].weak}</ul>
            <ul><span>Талант:</span> {archetypesResult[indexMax].talent}</ul>
          </div>
          <button id='cmbck' onClick={() => window.location.reload()}>Повернутись на головну сторінку</button>
        </div>
      )
      }
    </div>
  );
}

export default Quiz;