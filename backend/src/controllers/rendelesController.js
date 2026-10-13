import rendelesModel from "../models/rendelesModel.js";

const RendelesController = {
    async getAll(req,res) {
        try {
            const termekek = await rendelesModel.getAll();
            res.json(termekek);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Hiba történt a termékekkel!"})
        }
    }
}

export default RendelesController;