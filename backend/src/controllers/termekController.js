import TermekModel from '../models/termekModel.js';

const TermekController = {
    async getAll(req,res) {
        try {
            const termekek = await TermekModel.getAll();
            res.json(termekek);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Hiba történt a termékekkel!"})
        }
    }
}

export default TermekController;