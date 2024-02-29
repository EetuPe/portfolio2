"use client"
import { ModeToggle } from "./ui/toggle-mode";
import { Button } from "./ui/button";

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex items-center justify-between">
                    <li>
                        <h1 className="text-xl font-adlam">EetuPe</h1>
                    </li>
                    <li>
                        <div className="flex gap-6 items-center justify-center">
                            <ModeToggle />
                            <Button>Resume</Button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}