import { wait } from "@/utils/misc";
import Image from "next/image";
import React from "react";
import logo from "../../../../public/images/logo.png"
import PageHeader from "@/components/common/page-header";

export const metadata = {
	title: "Contact",
	description: "You can get luxury electronic devices",
};
const ContactPage = async () => {
	await wait(3000);

	return (
		<div>
			<PageHeader title="Contact"/>

			<div style={{height: "200px", width:"50%", position:"relative"}}>
				<Image
					src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill
					style={{objectFit: "cover", objectPosition:"bottom center"}}
				/>
			</div>

			<Image src={logo}/>

		</div>
	);
};

export default ContactPage;
