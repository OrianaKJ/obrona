import React from 'react';
import './HeroImage.css'

export const HeroImage = () => (   
        <>
                <img className="image" src="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80" alt="The cinema"></img>
                <div className="text-msg">
                        <h2>Sprawdź co ciekawego możesz teraz oglądnąć.</h2> 
                        <span className="msg-span">Skorzystaj z bazy filmów i wybierz coś dla siebie!</span>
                </div>
        </>
)
