class Food {
  id: number;
  image: string;
  infos: string[];
  title: string;
  note: string;
  description: string;
  modalDescription: string;

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    note: string,
    description: string,
    modalDescription: string,
  ) {
    this.id = id;
    this.image = image;
    this.infos = infos;
    this.title = title;
    this.note = note;
    this.description = description;
    this.modalDescription = modalDescription;
  }
}

export default Food;
