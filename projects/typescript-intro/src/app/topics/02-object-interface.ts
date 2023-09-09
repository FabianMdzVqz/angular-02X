// Tipos de datos
let skills :string[] = ['Bash','Counter','Healing']

// Tipos de datos orientado a objetos

interface Character {
  name: string,
  hp: number,
  skills: string[],
  hometown?: string // Opcional "?""
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ['Bash','Counter']
}

strider.hometown ='CDMX'
console.table(strider)
