import chefLogo from "./assets/ChefIcon.png"
export default function Header() {
    return (
        <>
            <header>
                <img src={chefLogo} />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}