import React from 'react';
import { API_IMG, API_ROOT } from './api'

it('it should work bitch', () => {
    fetch(`${API_ROOT}`)
        .then(res => res.json())
        .then(result => {

        }).catch(() => {})
})