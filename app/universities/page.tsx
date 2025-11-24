import SiteNav from "@/components/site-nav"
import { FadeLink } from "@/components/fade-link"
import { ArrowUpRight } from "lucide-react"
import { universitiesMetadata } from "@/lib/metadata"

export const metadata = universitiesMetadata

const universityGroups = [
	{
		city: "Vienna (Wien)",
		universities: [
			{
				name: "University of Vienna (Universität Wien)",
				url: "https://www.univie.ac.at/en/",
				desc: "Offers 180+ programmes and a strong international community.",
			},
			{
				name: "Vienna University of Technology (TU Wien)",
				url: "https://www.tuwien.at/en/",
				desc: "Top technology/university of engineering in Vienna.",
			},
			{
				name: "University of Natural Resources and Life Sciences, Vienna (BOKU)",
				url: "https://www.boku.ac.at/",
				desc: "Specialist in life sciences, environment & sustainable resources.",
			},
			{
				name: "Vienna University of Economics and Business (WU)",
				url: "https://www.wu.ac.at/",
				desc: "Business & economics focus.",
			},
			{
				name: "Medical University of Vienna (MedUni Wien)",
				url: "https://www.meduniwien.ac.at/",
				desc: "Major medical/health sciences university.",
			},
			{
				name: "University of Applied Arts Vienna",
				url: "https://www.dieangewandte.at/en/",
				desc: "Creative/arts programmes.",
			},
			{
				name: "University of Music and Performing Arts Vienna (MDW)",
				url: "https://www.mdw.ac.at/",
				desc: "Performing arts, music.",
			},
			{
				name: "Academy of Fine Arts Vienna",
				url: "https://www.akbild.ac.at/en/",
				desc: "Fine arts specialist.",
			},
			{
				name: "University of Veterinary Medicine, Vienna",
				url: "https://www.vetmeduni.ac.at/",
				desc: "Veterinary medicine.",
			},
		],
	},
	{
		city: "Leoben (Styria)",
		universities: [
			{
				name: "Montanuniversitaet Leoben",
				url: "https://www.unileoben.ac.at/en/",
				desc: "Mining, metallurgy, and materials science. Sometimes listed with Vienna options.",
			},
		],
	},
	{
		city: "Salzburg",
		universities: [
			{
				name: "University of Salzburg",
				url: "https://www.plus.ac.at/en/",
				desc: "General university in Salzburg.",
			},
			{
				name: "Mozarteum University Salzburg",
				url: "https://www.moz.ac.at/en/",
				desc: "Music & arts at Salzburg.",
			},
		],
	},
	{
		city: "Graz",
		universities: [
			{
				name: "University of Graz",
				url: "https://www.uni-graz.at/en/",
				desc: "Major university in Graz.",
			},
			{
				name: "Graz University of Technology (TU Graz)",
				url: "https://www.tugraz.at/en/home/",
				desc: "Tech/engineering in Graz.",
			},
			{
				name: "University of Music and Performing Arts Graz (KUG)",
				url: "https://www.kug.ac.at/en/",
				desc: "Arts/music in Graz.",
			},
			{
				name: "Medical University of Graz",
				url: "https://www.medunigraz.at/en/",
				desc: "Medical sciences in Graz.",
			},
		],
	},
	{
		city: "Linz",
		universities: [
			{
				name: "Johannes Kepler University Linz (JKU)",
				url: "https://www.jku.at/en/",
				desc: "University in Linz.",
			},
			{
				name: "University of Art and Design Linz",
				url: "https://www.ufg.at/en/",
				desc: "Arts/design in Linz.",
			},
		],
	},
	{
		city: "Innsbruck",
		universities: [
			{
				name: "University of Innsbruck",
				url: "https://www.uibk.ac.at/en/",
				desc: "Major university in Innsbruck.",
			},
			{
				name: "Medical University of Innsbruck",
				url: "https://www.i-med.ac.at/",
				desc: "Medical sciences in Innsbruck.",
			},
		],
	},
	{
		city: "Klagenfurt",
		universities: [
			{
				name: "University of Klagenfurt",
				url: "https://www.aau.at/en/",
				desc: "University in Carinthia region (Klagenfurt).",
			},
		],
	},
	{
		city: "Krems (Lower Austria)",
		universities: [
			{
				name: "Danube University Krems / University for Continuing Education Krems",
				url: "https://www.donau-uni.ac.at/en/",
				desc: "Continuing education, postgraduate focus. Same as above; focuses on mid-career/postgrad.",
			},
		],
	},
	// FH (Universities of Applied Sciences)
	{
		city: "Universities of Applied Sciences (FH)",
		universities: [
			{
				name: "University of Applied Sciences Technikum Wien (Vienna)",
				url: "https://www.technikum-wien.at/en/",
				desc: "Vienna",
			},
			{
				name: "FHWien der WKW (Vienna)",
				url: "https://www.fh-wien.ac.at/en/",
				desc: "Vienna",
			},
			{
				name: "FH JOANNEUM University of Applied Sciences (Graz)",
				url: "https://www.fh-joanneum.at/en/",
				desc: "Graz",
			},
			{
				name: "FHV – Vorarlberg University of Applied Sciences (Dornbirn, Vorarlberg)",
				url: "https://www.fhv.at/en/",
				desc: "Dornbirn, Vorarlberg",
			},
			{
				name: "St. Pölten University of Applied Sciences (St. Pölten, Lower Austria)",
				url: "https://www.fhstp.ac.at/en/",
				desc: "St. Pölten, Lower Austria",
			},
			{
				name: "Carinthia University of Applied Sciences (Kärnten)",
				url: "https://www.fh-kaernten.at/en/",
				desc: "Kärnten (Carinthia)",
			},
			{
				name: "IMC University of Applied Sciences Krems (Krems, Lower Austria)",
				url: "https://www.fh-krems.ac.at/en/",
				desc: "Krems, Lower Austria",
			},
			{
				name: "University of Applied Sciences Wiener Neustadt (Wiener Neustadt, Lower Austria)",
				url: "https://www.fhwn.ac.at/en/",
				desc: "Wiener Neustadt, Lower Austria",
			},
			{
				name: "University of Applied Sciences Upper Austria (Hagenberg, Linz, Steyr)",
				url: "https://www.fh-ooe.at/en/",
				desc: "Hagenberg, Linz, Steyr",
			},
			{
				name: "University of Applied Sciences Burgenland (Eisenstadt / Pinkafeld)",
				url: "https://www.fh-burgenland.at/en/",
				desc: "Eisenstadt / Pinkafeld",
			},
		],
	},
]

export default function UniversitiesPage() {
	return (
		<div className="min-h-screen bg-background">
			<SiteNav currentPage="universities" />
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
					Universities in Austria
				</h1>
				<p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
					Explore the top universities in Austria, grouped by city. Click any
					university to visit its official page. Enjoy a smooth transition effect!
				</p>
				<div className="space-y-8 sm:space-y-10">
					{universityGroups.map((group) => (
						<div key={group.city}>
							<h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
								{group.city}
							</h2>
							<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
								{group.universities.map((uni) => (
									   <FadeLink
										   key={uni.url}
										   href={uni.url}
										   target="_blank"
										   rel="noopener noreferrer"
										   className="block p-4 sm:p-5 bg-card border border-border rounded-lg shadow hover:shadow-lg transition-shadow hover:bg-muted/50 group"
									   >
										   <div className="flex items-start sm:items-center font-semibold text-base sm:text-lg text-foreground mb-2">
											   <span className="flex-1 break-words">{uni.name}</span>
											   <ArrowUpRight className="ml-2 w-4 h-4 text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
										   </div>
										   <div className="text-sm text-muted-foreground">
											   {uni.desc}
										   </div>
									   </FadeLink>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
