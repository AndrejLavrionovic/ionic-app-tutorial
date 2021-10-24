import {
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
} from "@ionic/react";
import React from "react";

function BiorithmCard({ targetDate }) {
	return (
		<IonCard className="ion-text-center">
			<IonCardHeader>
				<IonCardTitle>{targetDate}</IonCardTitle>
			</IonCardHeader>
			<IonCardContent>
				<p>Physical: 83%</p>
				<p>Emotional: 34%</p>
				<p>Intellectual: 52%</p>
			</IonCardContent>
		</IonCard>
	);
}

export default BiorithmCard;