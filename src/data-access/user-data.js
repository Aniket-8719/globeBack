const TABLE_NAME = 'users';

module.exports = function makeUserData({ pool }) {
  return Object.freeze({
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  });

  async function getAllUsers() {
    const { rows } = await pool.query(`SELECT * FROM ${TABLE_NAME}`);
    return rows;
  }

  async function getUserById(id) {
    const { rows } = await pool.query(
      `SELECT * FROM ${TABLE_NAME} WHERE id = $1`,
      [id]
    );
    return rows[0];
  }

  async function createUser({ name, email }) {
    const { rows } = await pool.query(
      `INSERT INTO ${TABLE_NAME} (name, email) VALUES ($1, $2) RETURNING *`,
      [name, email]
    );
    return rows[0];
  }

  async function updateUser({ id, name, email }) {
    const { rows } = await pool.query(
      `UPDATE ${TABLE_NAME} SET name = $1, email = $2 WHERE id = $3 RETURNING *`,
      [name, email, id]
    );
    return rows[0];
  }

  async function deleteUser(id ) {
    await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`, [id]);
  }
};
