import axios from "axios";

const BASE_URL = "http://localhost:3090/notes";

export class NoteAPi {
    static async create(note) {
        return (await axios.post(`${BASE_URL}`, note)).data;
    }
    static async fetchAll() {
        return (await axios.get(`${BASE_URL}`)).data;
    }
    static async fetchById(noteID) {
        return (await axios.get(`${BASE_URL}/${noteID}`)).data;
    }
    static async deleteById(noteID) {
        return (await axios.delete(`${BASE_URL}/${noteID}`)).data;
    }
    static async updateById(note) {
        return (await axios.patch(`${BASE_URL}/${note.id}`, note)).data;
    }
}