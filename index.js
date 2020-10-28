let languages = {
	english: {
		title: "Hello this is the best Language Switcher",
		description: "We make language switching a Easy Job for the developers",
		author: "Hassan Marzooq",
	},
	tamil: {
		title: "வணக்கம் இது சிறந்த மொழி மாற்றியாகும்",
		description: "டெவலப்பர்களுக்காக மொழி மாற்றுவதை எளிதான வேலையாக மாற்றுவோம்",
		author: "ஹசன் மர்சூக்",
	},
};
const languageSwitcher = (languageList, currentLanguage = "english") => {
	const element = document.getElementsByTagName("Lang");
	const languageFiles = languages[currentLanguage];
	console.log(languageFiles);
	console.log(element);
	for (i = 0; i < element.length; i++) {
		console.log(element[i].dataset.lang);
		for (let elementName in languageFiles) {
			if (element[i].dataset.lang == elementName) {
				console.log(languageFiles[elementName]);
				element[i].innerHTML = languageFiles[elementName];
			}
		}
	}
};

languageSwitcher();
