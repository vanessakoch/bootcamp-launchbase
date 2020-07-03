module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birth = new Date(timestamp)
  
    let age = today.getFullYear() - birth.getFullYear()
    const month = today.getMonth() - birth.getMonth()
  
    if (month < 0 || month == 0 && today.getDate() <= birth.getDate()) {
      age -= 1
    }
  
    return age
  },

  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },

  graduation: function(education) {
    let graduation

    if (education == 'medium') {
      graduation = 'Complete High School'
    } else if (education == 'graduation'){
      graduation = 'Complete Graduation'
    } else if (education == 'master') {
      graduation = `Master's Degree`
    } else {
      graduation = 'Doctorate Degree'
    }

    return graduation
  },

  grade: function(grade) {
    let gradeClass

    if (grade == "5") {
      gradeClass = '5th grade of Elementery School'
    } else if (grade == "6") {
      gradeClass = '6th grade of Middle School'
    } else if (grade == "7") {
      gradeClass = '7th grade of Middle School'
    } else if (grade == "8") {
      gradeClass = '8th grade of Middle School'
    } else if (grade == "9") {
      gradeClass = '9th grade (Freshman) of High School'
    } else if (grade == "10") {
      gradeClass = '10th grade (Sophomore) of High School'
    } else if (grade == "11") {
      gradeClass = '11th grade (Junior) of High School'
    } else {
      gradeClass = '12th grade (Senior) of High School'
    }

    return gradeClass
  }
}