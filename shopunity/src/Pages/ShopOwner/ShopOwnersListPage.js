import React from "react";
import Table from "react-bootstrap/Table";

function ShopOwnersListPage() {
  return (
    <div>
      {" "}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ShopOwner</th>
            <th>Shop Name</th>
            <th>ShopOwner contact </th>
            <th>Shop Register No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ShopOwnersListPage;
