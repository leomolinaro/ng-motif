export interface Card {
	id: number;
	imageSource: string;
	power?: number;
	kneeling?: boolean;
	revealed?: boolean;
	attachmentIds?: number[];
	duplicateIds?: number[];
} // Card