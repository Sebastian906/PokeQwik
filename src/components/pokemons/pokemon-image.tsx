import { component$, useSignal } from "@builder.io/qwik";

interface Props {
    id: number;
    size?: number;
    backImage: boolean;
}

export const PokemonImage = component$(({ id, size = 200, backImage = false }: Props) => {
    
    const imageLoaded = useSignal(false);
    
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    if (backImage) {
        imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
    }
    return (
        <div class="flex items-center justify-center"
            style={{ width: `${size}px`, height: `${size}px` }}>
            <span>Cargando...</span>
            <img
                src={imageUrl}
                alt="Imagen de Pokemon"
                style={{ width: `${size}` }}
            />
        </div>
    )
})