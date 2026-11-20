
import Link from "next/link";

export default function GitHubLink() {
    return (
        <main>
            <p>
                Here is a link to my GitHub repository:{" "}
                <Link href="https://github.com/Dylan-Keith/CSCI331_NEXT"
                className="font-bold text-blue-500 underline hover:text-blue-700"
                >
                    My GitHub Repository
                
                </Link>
            </p>
        </main>
    );
}
