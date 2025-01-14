import React from 'react'
import { ActorList, Footer, NavbarComponent, PageTitle } from '../../components'
import bgformactor from "../../assets/images/bg/bgformactor.jpg"

const ListActorPage = () => {
    return (
        <div style={{ backgroundImage: `url(${bgformactor})` }}>
            {/* NAVBAR */}
            <NavbarComponent />
            {/* NAVBAR END */}

            <div className="container mt-5">
                <div className="card border" style={{ height: '100vh' }}>
                    {/* Page Title */}
                    <PageTitle title="List Actor" />

                    {/* Content */}
                    <div className="card-body p-0">
                        <ActorList />
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <Footer />
            {/* FOOTER END */}
        </div>)
}

export default ListActorPage