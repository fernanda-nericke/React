import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'

export function App() {

    console.log("Oi");
    return (
    <> {/* React Fragment - Substitui uma div, mas para que não apareça como um componente ao dar um inspecionar na página. */}
        <Heading />
        <p>Fernanda</p>
    </>
    )
}

