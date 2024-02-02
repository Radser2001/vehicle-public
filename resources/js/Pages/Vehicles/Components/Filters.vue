<template>
    <div class="col-lg-3 pe-xl-4">
        <div class="offcanvas-lg offcanvas-start bg-dark" id="filters-sidebar">
            <div
                class="offcanvas-header bg-transparent d-flex d-lg-none align-items-center"
            >
                <h2 class="h5 text-light mb-0">Filters</h2>
                <button
                    class="btn-close btn-close-white"
                    type="button"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#filters-sidebar"
                ></button>
            </div>
            <div
                class="offcanvas-header bg-transparent d-block border-bottom border-light pt-0 pt-lg-4 px-lg-0"
            >
                <ul class="nav nav-tabs nav-tabs-light mb-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Search New</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Search Used</a>
                    </li>
                </ul>
            </div>
            <div class="offcanvas-body py-lg-4">
                <div class="pb-3 mb-4 border-bottom border-light">
                    <div
                        class="d-flex align-items-center justify-content-between mb-3"
                    >
                        <h3 class="h6 text-light mb-0">Selection</h3>
                        <button
                            class="btn btn-link btn-light fw-normal fs-sm p-0"
                            type="button"
                        >
                            Clear all
                        </button>
                    </div>
                    <ul
                        class="nav nav-pills nav-pills-light flex-row fs-sm mx-0"
                    >
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                Under 2019<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3">
                                Crossover<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                Sedan<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                SUV<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                Diesel<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                Gasoline<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                        <li class="nav-item mb-2 me-2">
                            <button class="nav-link px-3" type="button">
                                Hybrid<i class="fi-x fs-xxs ms-2"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Location</h3>
                    <select class="form-select form-select-light mb-2">
                        <option value="" disabled selected>
                            Select location
                        </option>
                        <option value="Chicago">Chicago</option>
                        <option value="Dallas">Dallas</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New York">New York</option>
                        <option value="San Diego">San Diego</option>
                    </select>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Body Type</h3>
                    <div
                        class="overflow-auto"
                        data-simplebar
                        data-simplebar-auto-hide="false"
                        data-simplebar-inverse
                        style="height: 11rem"
                    >
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="sedan"
                                checked
                            />
                            <label class="form-check-label fs-sm" for="sedan"
                                >Sedan</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="suv"
                                checked
                            />
                            <label class="form-check-label fs-sm" for="suv"
                                >SUV</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="wagon"
                            />
                            <label class="form-check-label fs-sm" for="wagon"
                                >Wagon</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="crossover"
                                checked
                            />
                            <label
                                class="form-check-label fs-sm"
                                for="crossover"
                                >Crossover</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="coupe"
                            />
                            <label class="form-check-label fs-sm" for="coupe"
                                >Coupe</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="pickup"
                            />
                            <label class="form-check-label fs-sm" for="pickup"
                                >Pickup</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="sport"
                            />
                            <label class="form-check-label fs-sm" for="sport"
                                >Sport Coupe</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="compact"
                            />
                            <label class="form-check-label fs-sm" for="compact"
                                >Compact</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="convertible"
                            />
                            <label
                                class="form-check-label fs-sm"
                                for="convertible"
                                >Convertible</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="mpv"
                            />
                            <label class="form-check-label fs-sm" for="mpv"
                                >Family MPV</label
                            >
                        </div>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light pt-1">Year</h3>
                    <div class="d-flex align-items-center">
                        <select class="form-select form-select-light w-100">
                            <option value="" disabled selected>From</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                        </select>
                        <div class="mx-2">&mdash;</div>
                        <select class="form-select form-select-light w-100">
                            <option value="" disabled>To</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019" selected>2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                        </select>
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Make &amp; Model</h3>
                    <select class="form-select form-select-light mb-2">
                        <option value="" disabled selected>Any make</option>
                        <option value="Audi">Audi</option>
                        <option value="Infiniti">Infiniti</option>
                        <option value="Honda">Honda</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Opel">Opel</option>
                        <option value="Renault">Renault</option>
                        <option value="Toyota">Toyota</option>
                    </select>
                    <select class="form-select form-select-light mb-1">
                        <option value="" disabled selected>Any model</option>
                        <option value="Altima">Altima</option>
                        <option value="Juke">Juke</option>
                        <option value="Leaf">Leaf</option>
                        <option value="Maxima">Maxima</option>
                        <option value="Micra">Micra</option>
                        <option value="Murano">Murano</option>
                        <option value="Note">Note</option>
                        <option value="Pathfinder">Pathfinder</option>
                        <option value="Patrol">Patrol</option>
                    </select>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Price</h3>
                    <div
                        class="range-slider range-slider-light mb-3"
                        data-start-min="25000"
                        data-start-max="65000"
                        data-min="4000"
                        data-max="100000"
                        data-step="1000"
                    >
                        <div class="range-slider-ui"></div>
                        <div class="d-flex align-items-center">
                            <div class="w-50 pe-2">
                                <input
                                    class="form-control form-control-light range-slider-value-min"
                                    type="text"
                                />
                            </div>
                            <div class="text-muted">&mdash;</div>
                            <div class="w-50 ps-2">
                                <input
                                    class="form-control form-control-light range-slider-value-max"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-check form-switch form-switch-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="negotiated-price"
                        />
                        <label
                            class="form-check-label fs-sm"
                            for="negotiated-price"
                            >Negotiated price</label
                        >
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Drivetrain</h3>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="awd"
                        />
                        <label class="form-check-label fs-sm" for="awd"
                            >AWD/4WD</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="front-wheel"
                        />
                        <label class="form-check-label fs-sm" for="front-wheel"
                            >Front Wheel Drive</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="rear-wheel"
                        />
                        <label class="form-check-label fs-sm" for="rear-wheel"
                            >Rear Wheel Drive</label
                        >
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Fuel Type</h3>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="diesel"
                            checked
                        />
                        <label class="form-check-label fs-sm" for="diesel"
                            >Diesel</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="electric"
                        />
                        <label class="form-check-label fs-sm" for="electric"
                            >Electric</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="gasoline"
                            checked
                        />
                        <label class="form-check-label fs-sm" for="gasoline"
                            >Gasoline</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="hybrid"
                            checked
                        />
                        <label class="form-check-label fs-sm" for="hybrid"
                            >Hybrid</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="hydrogen"
                        />
                        <label class="form-check-label fs-sm" for="hydrogen"
                            >Hydrogen</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="plugin"
                        />
                        <label class="form-check-label fs-sm" for="plugin"
                            >Plug-in Hybrid</label
                        >
                    </div>
                </div>
                <div class="pb-4 mb-1">
                    <h3 class="h6 text-light">Transmission</h3>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="auto"
                        />
                        <label class="form-check-label fs-sm" for="auto"
                            >Automatic</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="manual"
                        />
                        <label class="form-check-label fs-sm" for="manual"
                            >Manual</label
                        >
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light pt-1">Mileage</h3>
                    <div class="d-flex align-items-center">
                        <input
                            class="form-control form-control-light w-100"
                            type="number"
                            min="0"
                            step="500"
                            placeholder="From"
                        />
                        <div class="mx-2">&mdash;</div>
                        <input
                            class="form-control form-control-light w-100"
                            type="number"
                            min="0"
                            step="500"
                            placeholder="To"
                        />
                    </div>
                </div>
                <div class="pb-4 mb-2">
                    <h3 class="h6 text-light">Color</h3>
                    <div
                        class="overflow-auto"
                        data-simplebar
                        data-simplebar-auto-hide="false"
                        data-simplebar-inverse
                        style="height: 11rem"
                    >
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="amber"
                            />
                            <label class="form-check-label fs-sm" for="amber"
                                >Amber</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="azure"
                            />
                            <label class="form-check-label fs-sm" for="azure"
                                >Azure</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="beige"
                            />
                            <label class="form-check-label fs-sm" for="beige"
                                >Beige</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="black"
                            />
                            <label class="form-check-label fs-sm" for="black"
                                >Black</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="blue"
                            />
                            <label class="form-check-label fs-sm" for="blue"
                                >Blue</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="brown"
                            />
                            <label class="form-check-label fs-sm" for="brown"
                                >Brown</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="camouflage"
                            />
                            <label
                                class="form-check-label fs-sm"
                                for="camouflage"
                                >Camouflage green</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="charcoal"
                            />
                            <label class="form-check-label fs-sm" for="charcoal"
                                >Charcoal</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="gray"
                            />
                            <label class="form-check-label fs-sm" for="gray"
                                >Gray</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="green"
                            />
                            <label class="form-check-label fs-sm" for="green"
                                >Green</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="gold"
                            />
                            <label class="form-check-label fs-sm" for="gold"
                                >Gold</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="purple"
                            />
                            <label class="form-check-label fs-sm" for="purple"
                                >Purple</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="red"
                            />
                            <label class="form-check-label fs-sm" for="red"
                                >Red</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="white"
                            />
                            <label class="form-check-label fs-sm" for="white"
                                >White</label
                            >
                        </div>
                        <div class="form-check form-check-light">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                id="yellow"
                            />
                            <label class="form-check-label fs-sm" for="yellow"
                                >Yellow</label
                            >
                        </div>
                    </div>
                </div>
                <div class="pb-2">
                    <h3 class="h6 text-light">Sellers</h3>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="dealers"
                        />
                        <label class="form-check-label fs-sm" for="dealers"
                            >Dealers Only</label
                        >
                    </div>
                    <div class="form-check form-check-light">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            id="private-sellers"
                        />
                        <label
                            class="form-check-label fs-sm"
                            for="private-sellers"
                            >Private Sellers Only</label
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
