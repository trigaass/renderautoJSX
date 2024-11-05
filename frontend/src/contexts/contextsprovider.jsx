import { CorridasProvider } from "./corridas";
import { DistanciaProvider } from "./distancia";
import { GastosProvider } from "./gastos";
import { ReaisProvider } from "./reais";


export const AppProviders = ({ children }) => {
    return (
        <GastosProvider>
            <CorridasProvider>
                <DistanciaProvider>
                    <ReaisProvider>
                        {children}
                    </ReaisProvider>
                </DistanciaProvider>
            </CorridasProvider>
        </GastosProvider>
    );
};