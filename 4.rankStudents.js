function rankStudents(students) {
  // Empty array thakle direct empty array return korbo
  if (!students || students.length === 0) {
    return [];
  }

  // 1. Original array mutate na kore shallow copy banalam ebong score onujayi descending order-e sort korlam
  // JS er sort stable sort howay shoman score-er khetre tader original relative order thik thakbe
  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  const result = [];
  let currentRank = 1;

  // 2. Sorted list er upor loop chaliye rank assign korbo
  for (let i = 0; i < sortedStudents.length; i++) {
    // Prothom student chara baki sob student er score jodi ager student theke kom hoy
    // tokhon tar rank hobe tar serial position (i + 1)
    if (i > 0 && sortedStudents[i].score < sortedStudents[i - 1].score) {
      currentRank = i + 1;
    }

    // 3. Original student properties thik rekhe notun rank property add kore result-e push korlam
    result.push({
      ...sortedStudents[i],
      rank: currentRank,
    });
  }

  return result;
}
