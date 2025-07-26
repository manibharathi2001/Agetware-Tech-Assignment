exports.createLoan = async (req, res) => {
  try {
    const { customer_id, amount, term, interestRate } = req.body;

    if (!customer_id || !amount || !term || !interestRate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newLoan = new Loan({ customer_id, amount, term, interestRate });
    const savedLoan = await newLoan.save();

    res.status(201).json(savedLoan);
  } catch (err) {
    console.error("Loan creation error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
