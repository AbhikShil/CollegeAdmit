import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const { Meta } = Card;

const AdminCollegeCard = ({ college, handleRemove }) => {
  // destructure
  const { title, description, images, slug } = college;

  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "150px", objectFit: "cover" }}
          className="p-1"
          alt=""
        />
      }
      actions={[
        <Link to={`/admin/college/${slug}`}><EditOutlined className="text-warning" /></Link>,
        <DeleteOutlined className="text-danger" onClick={()=> handleRemove(slug)}/>,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminCollegeCard;
