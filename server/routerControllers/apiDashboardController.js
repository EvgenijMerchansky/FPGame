module.exports = (req, res) => {
    res.status(200).json({
        message: "You're authorized to see this secret message."
    });
};