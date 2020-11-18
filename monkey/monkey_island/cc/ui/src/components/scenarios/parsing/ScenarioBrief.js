export default class ScenarioBrief {
  constructor(id, name, description, important) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.important = important;
  }

  static dataToBrief(data) {
    return new ScenarioBrief(data.id, data.name, data.description, data.important);
  }
}
